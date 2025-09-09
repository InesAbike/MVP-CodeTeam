"use client";
import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { NotificationType } from '../../../providers/NotificationProvider';

interface ToastProps {
  id: string;
  type: NotificationType;
  title: string;
  message?: string;
  onClose: (id: string) => void;
  duration?: number;
}

const getToastStyles = (type: NotificationType) => {
  switch (type) {
    case 'success':
      return {
        container: 'bg-green-50 border-green-200',
        icon: <CheckCircle className="h-5 w-5 text-green-400" />,
        title: 'text-green-800',
        message: 'text-green-700',
        closeButton: 'text-green-500 hover:bg-green-100',
      };
    case 'error':
      return {
        container: 'bg-red-50 border-red-200',
        icon: <AlertCircle className="h-5 w-5 text-red-400" />,
        title: 'text-red-800',
        message: 'text-red-700',
        closeButton: 'text-red-500 hover:bg-red-100',
      };
    case 'warning':
      return {
        container: 'bg-yellow-50 border-yellow-200',
        icon: <AlertTriangle className="h-5 w-5 text-yellow-400" />,
        title: 'text-yellow-800',
        message: 'text-yellow-700',
        closeButton: 'text-yellow-500 hover:bg-yellow-100',
      };
    case 'info':
      return {
        container: 'bg-blue-50 border-blue-200',
        icon: <Info className="h-5 w-5 text-blue-400" />,
        title: 'text-blue-800',
        message: 'text-blue-700',
        closeButton: 'text-blue-500 hover:bg-blue-100',
      };
    default:
      return {
        container: 'bg-gray-50 border-gray-200',
        icon: <Info className="h-5 w-5 text-gray-400" />,
        title: 'text-gray-800',
        message: 'text-gray-700',
        closeButton: 'text-gray-500 hover:bg-gray-100',
      };
  }
};

export const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  onClose,
  duration = 5000
}) => {
  const styles = getToastStyles(type);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  return (
    <div className={`border rounded-lg p-4 shadow-lg max-w-md animate-in slide-in-from-right-2 ${styles.container}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {styles.icon}
        </div>
        <div className="ml-3 flex-1">
          <p className={`text-sm font-medium ${styles.title}`}>
            {title}
          </p>
          {message && (
            <p className={`mt-1 text-sm ${styles.message}`}>
              {message}
            </p>
          )}
        </div>
        <div className="ml-auto pl-3">
          <button
            onClick={() => onClose(id)}
            className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.closeButton}`}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
"use client";
import React from 'react';
import { Toast } from './Toast';
import { useNotification } from '../../../providers/NotificationProvider';

export const ToastContainer: React.FC = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <Toast
          key={notification.id}
          id={notification.id}
          type={notification.type}
          title={notification.title}
          message={notification.message}
          onClose={removeNotification}
          duration={notification.duration}
        />
      ))}
    </div>
  );
};
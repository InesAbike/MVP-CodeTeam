"use client";
import React from 'react';
import { X, AlertCircle } from 'lucide-react';
import { useError } from '../../../providers/ErrorProvider';

interface ErrorDisplayProps {
  className?: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ className = '' }) => {
  const { error, clearError } = useError();

  if (!error) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 max-w-md ${className}`}>
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-red-400" />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-red-800">
              Erreur
            </p>
            <p className="mt-1 text-sm text-red-700">
              {error}
            </p>
          </div>
          <div className="ml-auto pl-3">
            <button
              onClick={clearError}
              className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
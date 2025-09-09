"use client";
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ErrorContextType {
  error: string | null;
  setError: (error: string | null) => void;
  clearError: () => void;
  showError: (message: string) => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

interface ErrorProviderProps {
  children: ReactNode;
}

export const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const showError = useCallback((message: string) => {
    setError(message);
    // Auto-clear error after 5 seconds
    setTimeout(() => {
      setError(null);
    }, 5000);
  }, []);

  const value = {
    error,
    setError,
    clearError,
    showError,
  };

  return (
    <ErrorContext.Provider value={value}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (context === undefined) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};
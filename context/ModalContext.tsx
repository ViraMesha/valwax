'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type ModalContextProps = {
  children: React.ReactNode;
};

interface ModalContextValue {
  isModal: boolean;
  toggleModal: () => void;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export const ModalProvider: React.FC<ModalContextProps> = ({ children }) => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(prevIsModal => !prevIsModal);
    };
    
    const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      const currentTarget = e.currentTarget as HTMLElement;

      if (target === currentTarget) {
        setIsModal(false);
      }
    };

  useEffect(() => {
    const handleEscKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModal(false);
      }
    };

    if (isModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscKeydown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscKeydown);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKeydown);
    };
  }, [isModal]);

  return (
    <ModalContext.Provider value={{ isModal, toggleModal, onBackdropClick }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

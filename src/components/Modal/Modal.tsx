import React, { FC } from 'react';

import styles from './Modal.module.scss'; 

interface ModalProps {
  children: React.ReactNode;
  onBackdropClick: (id: string) => void;
}

const Modal: FC<ModalProps> = ({ children, onBackdropClick }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onBackdropClick('backdrop');
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modalBox}>{children}</div>
    </div>
  );
};

Modal.displayName = 'Modal';

export default Modal;

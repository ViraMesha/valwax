import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

const Modal: FC<ModalProps> = ({ children, onBackdropClick, className }) => {

  const textClassNames = `${styles.backdrop} ${className || ''}`;

  return createPortal(
    <div
      className={textClassNames}
      onClick={e => {
        onBackdropClick(e);
      }}
    >
      <div className={styles.modalBox} id='modal'>{children}</div>
    </div>,
    document.body
  );
};

Modal.displayName = 'Modal';

export default Modal;

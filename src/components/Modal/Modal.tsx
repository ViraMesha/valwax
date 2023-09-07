import React, { FC} from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
  onBackdropClick: (id: string) => void;
}

const Modal: FC<ModalProps> = ({ children, onBackdropClick }) => {
 
  return createPortal(
    <div
      className={styles.backdrop}
      id="backdrop"
      onClick={e => {
        onBackdropClick(e.currentTarget.id);
      }}
    >
      <div className={styles.modalBox}>{children}</div>
    </div>,
    document.body
  );
};

Modal.displayName = 'Modal';

export default Modal;

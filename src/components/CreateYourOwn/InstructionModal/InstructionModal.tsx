import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Typography from '../../Typography/Typography';

import styles from './InstructionModal.module.scss';

interface InstructionModalProps {
  dict:  string[];
  onClose: () => void;
}

const InstructionModal: React.FC<InstructionModalProps> = ({
  dict,
  onClose,
}) => {
  return (
    <div className={styles.instructionWrapper}>
      <AiOutlineClose
        style={{ strokeWidth: '4px' }}
        className={styles.closeIcon}
        color="var(--cl-gray-700)"
        onClick={onClose}
      />
      {dict.map((text, index) => (
        <Typography
          key={index}
          variant="bodyRegular"
          color="var(--cl-gray-600)"
          className={styles.instructionTypography}
        >
          {text}
        </Typography>
      ))}
    </div>
  );
};

export default InstructionModal;

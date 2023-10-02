import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Typography from '../Typography/Typography';

import styles from './InstructionModal.module.scss';

interface InstructionModalProps {
  dict: {
    text1: string[];
    text2: string[];
    text3: string;
  };
  onClose: () => void;
};

const InstructionModal: React.FC<InstructionModalProps> = ({ dict, onClose }) => {
    return (
        <div className={styles.instructionWrapper}>
          <AiOutlineClose
          style={{ strokeWidth: '4px' }}
          className={styles.closeIcon}
          color="var(--cl-gray-700)"
          onClick={onClose}
        />  
       { dict.text1.map((text, index) => (
        <Typography key={index} variant="bodyRegular">{text}</Typography>
       ))}
       { dict.text2.map((text, index) => (
        <Typography key={index} variant="bodyRegular">{text}</Typography>
       ))}
        <Typography variant="bodyRegular">{dict.text3}</Typography>
        </div>
    );
};

export default InstructionModal;
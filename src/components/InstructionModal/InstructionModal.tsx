import React from 'react';

import Typography from '../Typography/Typography';

import styles from './InstructionModal.module.scss';

interface InstructionModalProps {
  dict: {
      text1: string[];
      text2: string[];
      text3: string;
    };
};

const InstructionModal: React.FC<InstructionModalProps> = ({ dict }) => {
    return (
        <div className={styles.instructionWrapper}>
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
import React from 'react';
import { FaCheck } from 'react-icons/fa6';

import Typography from './../../../Typography/Typography';

import styles from './RadioButtons.module.scss';

interface RadioButtonsProps {
  options: string[];
  onChangeSelector: (v: string) => void;
  checkedSelector: string;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
  options,
  onChangeSelector,
  checkedSelector,
}) => {
  return (
    <div className={styles.radioButtonsContainer}>
      {options.map((option, index) => {
        const [displayText, additionalText] = option.split(' - ');

        return (
          <div key={index} className={styles.radioButtonsWrapper}>
            <label className={styles.radioButtonsLabel}>
              <input
                className={styles.radioButtonsInput}
                type="radio"
                value={option}
                checked={checkedSelector === option}
                onChange={() => onChangeSelector(option)}
              />
              <span className={styles.radioButtonsIcon}>
                {checkedSelector === option && (
                  <FaCheck
                    style={{ color: 'var(--cl-white)', width: '12px' }}
                  />
                )}
              </span>

              <Typography variant="bodyRegular" color="var(--cl-gray-500)">
                {displayText}
              </Typography>
            </label>
            {additionalText && (
              <Typography
                variant="bodyS2"
                color="var(--cl-gray-300)"
                className={styles.additionalText}
              >
                {additionalText}
              </Typography>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RadioButtons;

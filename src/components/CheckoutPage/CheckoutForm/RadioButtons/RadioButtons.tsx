import React, { ChangeEvent, useEffect } from 'react';
import { FaCheck } from "react-icons/fa6";

import styles from './RadioButtons.module.scss';

// import { useDeliveryActionsContext } from '../../../../../context/DeliveryContext';
// import { useDeliveryContext } from '../../../../../context/DeliveryContext';
interface RadioButtonsProps {
  options: string[];
  onChangeSelector: React.Dispatch<React.SetStateAction<string>>;
  checkedSelector: string;

}


const RadioButtons: React.FC<RadioButtonsProps> = ({ options, onChangeSelector, checkedSelector }) => {
  // const { chooseDelivery } = useDeliveryActionsContext();
  // const { selectedDelivery } = useDeliveryContext();

  // const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   chooseDelivery(event.target.value);
  // };

  
  return (
    <div className={styles.radioButtonsContainer}>
      {options.map((option, index) => (
        <div key={index}>
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
                <FaCheck style={{ color: 'var(--cl-white)', width: '12px' }} />
              )}
            </span>
            {option}
          </label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;

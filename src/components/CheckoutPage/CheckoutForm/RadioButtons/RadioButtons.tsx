import React, { ChangeEvent, useEffect } from 'react';

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
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              value={option}
              checked={checkedSelector === option}
              onChange={() => onChangeSelector(option)}
            />
            {option}
          </label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;

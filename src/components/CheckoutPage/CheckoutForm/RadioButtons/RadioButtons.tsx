import React, { ChangeEvent } from 'react';

import { useStateActionsContext } from '../../../../../context/StateContext';
import { useStateContext } from '../../../../../context/StateContext';

const RadioButtons = () => {
  const { chooseDelivery } = useStateActionsContext();
  const { selectedDelivery } = useStateContext();

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    chooseDelivery(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="Нова пошта (Відділення)"
          checked={selectedDelivery === 'Нова пошта (Відділення)'}
          onChange={handleOptionChange}
        />
        Нова пошта (Відділення)
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="Нова пошта (Поштомат)"
          checked={selectedDelivery === 'Нова пошта (Поштомат)'}
          onChange={handleOptionChange}
        />
        Нова пошта (Поштомат)
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="Укрпошта"
          checked={selectedDelivery === 'Укрпошта'}
          onChange={handleOptionChange}
        />
        Укрпошта
      </label>
      <br />
    </div>
  );
};

export default RadioButtons;

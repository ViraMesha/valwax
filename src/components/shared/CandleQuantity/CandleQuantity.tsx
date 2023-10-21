'use client';
import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import Typography from '@components/components/Typography/Typography';

import { useStateActionsContext } from '../../../../context/StateContext';

import styles from './CandleQuantity.module.scss';

interface CandleQuantityProps {
  className?: string;
  isCartQuantity?: boolean;
  id?: string;
  qty?: number;
}

const CandleQuantity: React.FC<CandleQuantityProps> = ({
  className,
  isCartQuantity,
  id,
  qty,
}) => {
  const { toggleCartItemQuantity } = useStateActionsContext();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={`${styles.buttonGroup} ${className || ''}`}>
      {isCartQuantity ? (
        <>
          {' '}
          <button
            onClick={() => id && toggleCartItemQuantity(id, 'dec')}
            className={styles.candleCount}
          >
            <FiMinus />
          </button>
          <Typography variant="button" color="var(--cl-primary-900)">
            {qty}
          </Typography>
          <button
            onClick={() => id && toggleCartItemQuantity(id, 'inc')}
            className={styles.candleCount}
          >
            <FiPlus />
          </button>
        </>
      ) : (
        <>
          {' '}
          <button onClick={handleDecrement} className={styles.candleCount}>
            <FiMinus />
          </button>
          <Typography variant="button" color="var(--cl-primary-900)">
            {quantity}
          </Typography>
          <button onClick={handleIncrement} className={styles.candleCount}>
            <FiPlus />
          </button>
        </>
      )}
    </div>
  );
};

export default CandleQuantity;

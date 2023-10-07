'use client';

import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import Button from '@components/components/Button/Button';
import CandleQuantity from '@components/components/shared/CandleQuantity/CandleQuantity';
import Typography from '@components/components/Typography/Typography';

import AccordionSection from '../../shared/AccordionSection/AccordionSection';

import styles from './CandleDescription.module.scss';

const CandleDescription = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.candleSectionWrapper}>
      <div className={styles.candleWrapper}>
        <Typography variant="bodyXLHeavy" color="var(--cl-primary-800)">
          Ароматична свічка Paradise
        </Typography>
        <Typography
          variant="bodyRegular"
          color="var(--cl-gray-500)"
          className={styles.candleDescription}
        >
          Свічка з соєвого воску з ароматом опалого листя.
        </Typography>
        <div className={styles.candeleCostWrapper}>
          <Typography variant="button" color="var(--cl-gray-500)">
            Вартість:
          </Typography>
          <div className={styles.candeleCost}>
            <Typography variant="button" color="var(--cl-primary-500)">
              550
            </Typography>
            <Typography color="var(--cl-primary-500)">&#8372;</Typography>
          </div>
        </div>
        <div className={styles.candeleQuantity}>
          <Typography variant="button" color="var(--cl-gray-500)">
            Кількість:
          </Typography>
          <CandleQuantity quantity={quantity} setQuantity={setQuantity} />
        </div>

        <div className={styles.candeleBuyWrapper}>
          <Button variant="secondary" className={styles.candeleBuy}>
            До кошика
          </Button>
          <Button variant="primary" className={styles.candeleBuy}>
            Купити зараз
          </Button>
        </div>
        <div className={styles.candeleAccordion}>
          <AccordionSection title="Верхні ноти" content="Кедр, пекан" />
          <AccordionSection title="Базові ноти" content="Кедр, пекан" />
          <AccordionSection title="Об’єм" content="Кедр, пекан" />
        </div>
      </div>
    </div>
  );
};

export default CandleDescription;

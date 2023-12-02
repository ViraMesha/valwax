'use client';
import { useState } from 'react';
import CandleQuantity from '@components/components/shared/CandleQuantity/CandleQuantity';
import Typography from '@components/components/Typography/Typography';
import { BoxDetailsI, ButtonsDictI, CandleDetailsI } from '@components/types';

import AccordionSection from '../AccordionSection/AccordionSection';
import BuyButtons from '../BuyButtons/BuyButtons';

import styles from './Description.module.scss';

interface DescriptionProps {
  product: BoxDetailsI | CandleDetailsI;
  id?: string;
  buttonsDict: ButtonsDictI;
}

const Description: React.FC<DescriptionProps> = ({
  product,
  id,
  buttonsDict,
}) => {
  const { id: productId, images, title, description, price, slug } = product;
  const isCandlePage = id === 'candle_details';
  const isBoxPage = id === 'box_details';
  const [quantity, setQuantity] = useState(1);

  const accordionsections = [
    { title: 'Верхні ноти', content: 'Кедр, пекан' },
    { title: 'Базові ноти', content: 'Кедр, пекан' },
    { title: 'Об’єм', content: 'Кедр, пекан' },
  ];

  return (
    <div className={styles.candleSectionWrapper}>
      <div className={styles.candleWrapper}>
        <Typography
          variant="bodyXLHeavy"
          color="var(--cl-primary-800)"
          className={styles.candleTitle}
        >
          Ароматична свічка Paradise
        </Typography>
        {isCandlePage && (
          <Typography
            variant="bodyRegular"
            color="var(--cl-gray-500)"
            className={styles.candleDescription}
          >
            Свічка з соєвого воску з ароматом опалого листя.
          </Typography>
        )}
        <div className={styles.candeleCostWrapper}>
          <Typography variant="button" color="var(--cl-gray-500)">
            Вартість:
          </Typography>
          <div className={styles.candeleCost}>
            <Typography
              variant="subheadingMobile"
              color="var(--cl-primary-500)"
            >
              550
            </Typography>
            <span className={styles.costSymbol}>&#8372;</span>
          </div>
        </div>
        <div className={styles.candeleQuantity}>
          <Typography variant="button" color="var(--cl-gray-500)">
            Кількість:
          </Typography>
          <CandleQuantity qty={quantity} setQuantity={setQuantity} />
        </div>
        {isBoxPage && (
          <div>
            <Typography variant="button" color="var(--cl-gray-500)">
              Оберіть аромат
            </Typography>
          </div>
        )}
        <BuyButtons
          product={{
            ...product,
            id: productId,
            img: images[0],
            link: slug,
            quantity,
          }}
          buttonsDict={buttonsDict}
        />

        {/* <div className={styles.candeleAccordion}>
           {product.components.map((component, index) => (
            <AccordionSection
              key={index}
              title={component.title}
              content={component.content}
            />
          ))}
        </div> */}

        {/* Ця частина кода тимчасова, замість цієї що вище закоментована */}
        {isCandlePage && (
          <div className={styles.candeleAccordion}>
            {accordionsections.map((component, index) => (
              <AccordionSection
                key={index}
                title={component.title}
                content={component.content}
              />
            ))}
          </div>
        )}

        {isBoxPage && (
          <div className={styles.candeleAccordion}>
            {accordionsections.map((component, index) => (
              <AccordionSection
                key={index}
                title={component.title}
                content={component.content}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;

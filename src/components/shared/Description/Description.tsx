'use client';
import { useState } from 'react';
import CandleQuantity from '@components/components/shared/CandleQuantity/CandleQuantity';
import Typography from '@components/components/Typography/Typography';
import { joinAromaNotes } from '@components/helpers/joinAromaNotes';
import { BoxDetailsI, ButtonsDictI, CandleDetailsI } from '@components/types';

import AccordionSection from '../AccordionSection/AccordionSection';
import BuyButtons from '../BuyButtons/BuyButtons';

import styles from './Description.module.scss';

interface DescriptionProps {
  product: BoxDetailsI | CandleDetailsI;
  id?: string;
  buttonsDict: ButtonsDictI;
  itemAdded: string;
  productDescriptionDict: IProductDescriptionDict;
}

const Description: React.FC<DescriptionProps> = ({
  product,
  id,
  buttonsDict,
  itemAdded,
  productDescriptionDict,
}) => {
  const [quantity, setQuantity] = useState(1);
  const {
    id: productId,
    images,
    title,
    description,
    price,
    slug,
    volume,
    aroma,
  } = product;

  const {
    price: priceDict,
    quantity: quantityDict,
    topNotes,
    baseNotes,
    volume: volumeDict,
    containerVolume,
    matchsticks: matchsticksDict,
    wick: wickDict,
    wax: waxDict,
    color: colorDict,
    aroma: aromaDict,
  } = productDescriptionDict;
  const isCandlePage = id === 'candle_details';
  const isBoxPage = id === 'box_details';

  const accordionsections = [
    { title: topNotes, content: 'Кедр, пекан' },
    { title: baseNotes, content: 'Кедр, пекан' },
    { title: volumeDict, content: 'Кедр, пекан' },
  ];

  const candlesAccordionContent = [
    {
      title: topNotes,
      content: !Array.isArray(aroma) ? joinAromaNotes(aroma.topNotes) : '',
    },
    {
      title: baseNotes,
      content: !Array.isArray(aroma) ? joinAromaNotes(aroma.baseNotes) : '',
    },
    { title: volumeDict, content: volume },
  ];

  return (
    <div className={styles.candleSectionWrapper}>
      <div className={styles.candleWrapper}>
        <Typography
          variant="bodyXLHeavy"
          color="var(--cl-primary-800)"
          className={styles.candleTitle}
        >
          {title}
        </Typography>
        {isCandlePage && (
          <Typography
            variant="bodyRegular"
            color="var(--cl-gray-500)"
            className={styles.candleDescription}
          >
            {description}
          </Typography>
        )}
        <div className={styles.candeleCostWrapper}>
          <Typography variant="button" color="var(--cl-gray-500)">
            {priceDict}
          </Typography>
          <div className={styles.candeleCost}>
            <Typography
              variant="subheadingMobile"
              color="var(--cl-primary-500)"
            >
              {price}
            </Typography>
            <span className={styles.costSymbol}>&#8372;</span>
          </div>
        </div>
        <div className={styles.candeleQuantity}>
          <Typography variant="button" color="var(--cl-gray-500)">
            {quantityDict}
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
          itemAdded={itemAdded}
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
            {candlesAccordionContent.map((component, index) => (
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

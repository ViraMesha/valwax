'use client';
import { useState } from 'react';
import { configuratorData } from '@components/components/CreateYourOwn/ConfiguratorSection/Configurator/configuratorData';
import Parameter from '@components/components/CreateYourOwn/ConfiguratorSection/Configurator/Parameter/Parameter';
import CandleQuantity from '@components/components/shared/CandleQuantity/CandleQuantity';
import Typography from '@components/components/Typography/Typography';
import { joinAromaNotes, useCandleParam } from '@components/helpers/index';
import {
  BoxDetailsI,
  ButtonsDictI,
  CandleDetailsI,
  configuratorSectionI,
} from '@components/types';

import AccordionSection from '../AccordionSection/AccordionSection';
import BuyButtons from '../BuyButtons/BuyButtons';

import styles from './Description.module.scss';

interface DescriptionProps {
  product: BoxDetailsI | CandleDetailsI;
  id: string;
  buttonsDict: ButtonsDictI;
  itemAdded: string;
  productDescriptionDict: IProductDescriptionDict;
  configuratorDict?: configuratorSectionI;
}

const Description: React.FC<DescriptionProps> = ({
  product,
  id,
  buttonsDict,
  itemAdded,
  productDescriptionDict,
  configuratorDict,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { paramCandle, handleChangeCandleParam } = useCandleParam();

  const {
    id: productId,
    images,
    title,
    description,
    price,
    slug,
    volume,
  } = product;

  const {
    price: priceDict,
    quantity: quantityDict,
    topNotes,
    baseNotes,
    volume: volumeDict,
    containerVolume: containerVolumeDict,
    matchsticks: matchsticksDict,
    wick: wickDict,
    wax: waxDict,
    aroma: aromaDict,
    volumeLabel: volumeLabelDict,
  } = productDescriptionDict;

  const { aroma } = configuratorDict
    ? configuratorData(configuratorDict)
    : { aroma: { number: '', title: '', options: [] } };

  const isCandlePage = id === 'candle_details';
  const isBoxPage = id === 'box_details';

  const candleAccordionContent = [
    {
      title: topNotes,
      content: 'aroma' in product ? joinAromaNotes(product.aroma.topNotes) : '',
    },
    {
      title: baseNotes,
      content:
        'aroma' in product ? joinAromaNotes(product.aroma.baseNotes) : '',
    },
    { title: volumeDict, content: volume },
  ];

  const boxAccordionContent =
    'kit' in product
      ? ([
          {
            title: `${containerVolumeDict} ${volume} ${volumeLabelDict}`,
            content: product.kit.container,
          },
          product.kit.matchsticks !== null && {
            title: matchsticksDict,
            content: product.kit.matchsticks,
          },
          {
            title: wickDict,
            content: product.kit.wick,
          },
          {
            title: waxDict,
            content: product.kit.wax,
          },
          {
            title: aromaDict,
            content: product.kit.aromaToChoose,
          },
        ].filter(Boolean) as { title: string; content: string }[])
      : [];

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
        <Typography
          variant="bodyRegular"
          color="var(--cl-gray-500)"
          className={styles.candleDescription}
        >
          {description}
        </Typography>
        <div className={styles.candeleCostWrapper}>
          <Typography variant="button" color="var(--cl-gray-500)">
            {priceDict}:
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
            {quantityDict}:
          </Typography>
          <CandleQuantity qty={quantity} setQuantity={setQuantity} />
        </div>
        {isBoxPage && (
          <div className={styles.aromaAccordion}>
            <Parameter
              dict={aroma}
              onChangeParam={handleChangeCandleParam}
              parameter="aroma"
              shouldHaveNumber={false}
            />
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

        {isCandlePage && (
          <div className={styles.candleAccordion}>
            {candleAccordionContent.map((component, index) => (
              <AccordionSection
                key={index}
                title={component.title}
                content={component.content}
              />
            ))}
          </div>
        )}

        {isBoxPage && (
          <div className={styles.candleAccordion}>
            {boxAccordionContent.map((component, index) => (
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

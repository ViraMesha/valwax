import React from 'react';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import ProductImgGallery from '@components/components/shared/ProductImgGallery/ProductImgGallery';
import {
  ButtonsDictI,
  CandleDetailsI,
  configuratorSectionI,
} from '@components/types';

import Description from '../../shared/Description/Description';

import styles from './CandleDetailsSection.module.scss';

interface CandleDetailsSectionI {
  product: CandleDetailsI;
  buttonsDict: ButtonsDictI;
  itemAdded: string;
  productDescriptionDict: IProductDescriptionDict;
}

const CandleDetailsSection: React.FC<CandleDetailsSectionI> = ({
  product,
  buttonsDict,
  itemAdded,
  productDescriptionDict,
}) => {
  return (
    <Section id={styles.candle_details_section}>
      <Container>
        <div className={styles.flexContainer}>
          <ProductImgGallery images={product.images} />
          <Description
            product={product}
            id="candle_details"
            buttonsDict={buttonsDict}
            itemAdded={itemAdded}
            productDescriptionDict={productDescriptionDict}
          />
        </div>
      </Container>
    </Section>
  );
};

export default CandleDetailsSection;

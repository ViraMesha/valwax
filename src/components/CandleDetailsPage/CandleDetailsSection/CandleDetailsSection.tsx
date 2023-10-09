'use client';

import React from 'react';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import ProductImgGallery from '@components/components/shared/ProductImgGallery/ProductImgGallery';
import { CandleDetailsI } from '@components/types';
import { useWindowSize } from 'usehooks-ts';

import Description from '../../shared/Description/Description';

import styles from './CandleDetailsSection.module.scss';

interface CandleDetailsSectionI {
  product: CandleDetailsI;
}

const CandleDetailsSection: React.FC<CandleDetailsSectionI> = ({ product }) => {
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1024;
  
  return (
    <Section id={styles.candle_details_section}>
      <Container>
        {isLargeScreen ? (
          <div className={styles.flexContainer}>
            <ProductImgGallery images={product.images} />
            <Description product={product} id="candle_details" />
          </div>
        ) : (
          <>
            <ProductImgGallery images={product.images} />
            <Description product={product} />
          </>
        )}
      </Container>
    </Section>
  );
};

export default CandleDetailsSection;

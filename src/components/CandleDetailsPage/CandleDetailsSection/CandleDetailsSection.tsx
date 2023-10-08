'use client';

import React from 'react';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import ProductImgGallery from '@components/components/shared/ProductImgGallery/ProductImgGallery';
import { useWindowSize } from 'usehooks-ts';

import Description from '../../shared/Description/Description';

import styles from './CandleDetailsSection.module.scss';

interface CandleDetailsSectionI {
  images: string[];
}

const CandleDetailsSection: React.FC<CandleDetailsSectionI> = ({ images }) => {
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1024;
  return (
    <Section id={styles.candle_details_section}>
      <Container>
        {isLargeScreen ? (
          <div className={styles.flexContainer}>
            <ProductImgGallery images={images} />
            <Description />
          </div>
        ) : (
          <>
            <ProductImgGallery images={images} />
            <Description />
          </>
        )}
      </Container>
    </Section>
  );
};

export default CandleDetailsSection;

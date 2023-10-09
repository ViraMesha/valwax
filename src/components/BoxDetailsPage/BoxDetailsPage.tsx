'use client';

import { useWindowSize } from 'usehooks-ts';

import { BoxDetailsI } from '../../types';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Description from '../shared/Description/Description';
import ProductImgGallery from '../shared/ProductImgGallery/ProductImgGallery';
import RelatedProducts from '../shared/RelatedProducts/RelatedProducts';

import styles from './BoxDetailsPage.module.scss';

interface BoxDetailsPageI {
  product: BoxDetailsI;
  dict: { title: string };
}

const BoxDetailsPage: React.FC<BoxDetailsPageI> = ({ product, dict }) => {
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1024;

  return (
    <>
      <Section id={styles.gallery_details_section}>
        <Container>
           {isLargeScreen ? (
          <div className={styles.flexContainer}>
            <ProductImgGallery images={product.images} />
            <Description product={product} id="box_details" />
          </div>
        ) : (
          <>
            <ProductImgGallery images={product.images} />
            <Description product={product} id="box_details" />
          </>
        )}
        </Container>
      </Section>
      <RelatedProducts relatedProducts={product.similar} title={dict.title} />
    </>
  );
};

export default BoxDetailsPage;

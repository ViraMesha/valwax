import { BoxDetailsI } from '../../types';
import Container from '../Container/Container';
import Section from '../Section/Section';
import ProductImgGallery from '../shared/ProductImgGallery/ProductImgGallery';
import RelatedProducts from '../shared/RelatedProducts/RelatedProducts';

import styles from './BoxDetailsPage.module.scss';

interface BoxDetailsPageI {
  product: BoxDetailsI;
  dict: { title: string };
}

const BoxDetailsPage: React.FC<BoxDetailsPageI> = ({ product, dict }) => {
  return (
    <>
      <Section id={styles.gallery_details_section}>
        <Container>
          <ProductImgGallery images={product.images} />
        </Container>
      </Section>
      <RelatedProducts relatedProducts={product.similar} title={dict.title} />
    </>
  );
};

export default BoxDetailsPage;

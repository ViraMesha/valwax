import { BoxDetailsI } from '../../../lib/types';
import Container from '../Container/Container';
import Section from '../Section/Section';

import BoxDetailsGallery from './BoxDetailsGallery/BoxDetailsGallery';
import RelatedProducts from './RelatedProducts/RelatedProducts';

import styles from './BoxDetailsPage.module.scss';

interface BoxDetailsPageI {
  product: BoxDetailsI;
  dict: {
    relatedProducts: {
      title: string;
    };
  };
}

const BoxDetailsPage: React.FC<BoxDetailsPageI> = ({ product, dict }) => {
  return (
    <>
      <Section id={styles.gallery_details_section}>
        <Container>
          <BoxDetailsGallery images={product.images} />
        </Container>
      </Section>
      <RelatedProducts
        relatedProducts={product.similar}
        dict={dict.relatedProducts}
      />
    </>
  );
};

export default BoxDetailsPage;

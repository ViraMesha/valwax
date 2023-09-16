import { BoxDetailsI } from '../../../lib/types';
import Container from '../Container/Container';
import Section from '../Section/Section';

import BoxDetailsGallery from './BoxDetailsGallery/BoxDetailsGallery';

import styles from './BoxDetailsPage.module.scss';

const BoxDetailsPage = ({ product }: { product: BoxDetailsI }) => {
  return (
    <Section id={styles.box_section}>
      <Container>
        <BoxDetailsGallery images={product.images} />
      </Container>
    </Section>
  );
};

export default BoxDetailsPage;

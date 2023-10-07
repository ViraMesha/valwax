import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import ProductImgGallery from '@components/components/shared/ProductImgGallery/ProductImgGallery';

import CandleDescription from '../CandleDescription/CandleDescription';

import styles from './CandleDetailsSection.module.scss';

interface CandleDetailsSectionI {
  images: string[];
}

const CandleDetailsSection: React.FC<CandleDetailsSectionI> = ({ images }) => {
  return (
    <Section
      id={styles.candle_details_section}
    >
      <Container>
        <ProductImgGallery images={images} />
        <CandleDescription />
      </Container>
    </Section>
  );
};

export default CandleDetailsSection;

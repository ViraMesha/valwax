import { BoxDetailsI, ButtonsDictI } from '../../types';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Description from '../shared/Description/Description';
import ProductImgGallery from '../shared/ProductImgGallery/ProductImgGallery';

import styles from './BoxDetailsPage.module.scss';

interface BoxDetailsPageI {
  product: BoxDetailsI;
  buttonsDict: ButtonsDictI;
  itemAdded: string;
  productDescriptionDict: IProductDescriptionDict;
}

const BoxDetailsPage: React.FC<BoxDetailsPageI> = ({
  product,
  buttonsDict,
  itemAdded,
  productDescriptionDict,
}) => {
  return (
    <>
      <Section id={styles.gallery_details_section}>
        <Container>
          <div className={styles.flexContainer}>
            <ProductImgGallery images={product.images} />
            <Description
              product={product}
              id="box_details"
              buttonsDict={buttonsDict}
              itemAdded={itemAdded}
              productDescriptionDict={productDescriptionDict}
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BoxDetailsPage;

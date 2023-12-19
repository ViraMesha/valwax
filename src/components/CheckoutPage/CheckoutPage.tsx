import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import type { CheckoutPageDictionary } from '@components/types';

import CheckoutForm from './CheckoutForm/CheckoutForm';
import ProductList from './ProductList/ProductList';

import styles from './CheckoutPage.module.scss';

interface CheckoutPageProps {
  dict: CheckoutPageDictionary;
  itemDeleted: string;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  dict: { productList, form },
  itemDeleted,
}) => {
  return (
    <Section>
      <Container className={styles.body}>
        <ProductList dict={productList} itemDeleted={itemDeleted} />
        <CheckoutForm dict={form} />
      </Container>
    </Section>
  );
};

export default CheckoutPage;

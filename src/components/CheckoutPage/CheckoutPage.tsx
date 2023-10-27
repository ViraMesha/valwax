import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';

import CheckoutForm from './CheckoutForm/CheckoutForm';
import ProductList from './ProductList/ProductList';

import styles from './CheckoutPage.module.scss';

interface CheckoutPageProps {
  dict: {
    productList: {
      deleteButtonText: string;
      totalText: string;
    };
  };
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  dict: { productList },
}) => {
  return (
    <Section>
      <Container className={styles.body}>
        <ProductList dict={productList} />
        <CheckoutForm />
      </Container>
    </Section>
  );
};

export default CheckoutPage;

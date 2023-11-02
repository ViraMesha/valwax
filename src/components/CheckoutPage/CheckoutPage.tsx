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
      descriptionPropertyNames: {
        wax: string;
        aroma: string;
        wick: string;
        color: string;
      };
    };
    form: {
      contactFormTitle: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      buttonText: string;
    };
  };
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  dict: { productList, form },
}) => {
  return (
    <Section>
      <Container className={styles.body}>
        <ProductList dict={productList} />
        <CheckoutForm dict={form} />
      </Container>
    </Section>
  );
};

export default CheckoutPage;

import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';

import ProductList from './ProductList/ProductList';

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
      <Container>
        <ProductList dict={productList} />
      </Container>
    </Section>
  );
};

export default CheckoutPage;

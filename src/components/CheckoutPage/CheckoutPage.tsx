import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';

import ProductList from './ProductList/ProductList';

const CheckoutPage = () => {
  return (
    <Section>
      <Container>
        <ProductList />
      </Container>
    </Section>
  );
};

export default CheckoutPage;

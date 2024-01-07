import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import type { CheckoutPageDictionary, configuratorSectionI } from '@components/types';

import CheckoutForm from './CheckoutForm/CheckoutForm';
import ProductList from './ProductList/ProductList';

import styles from './CheckoutPage.module.scss';

interface CheckoutPageProps {
  dict: CheckoutPageDictionary;
  dictParam: configuratorSectionI;
  itemDeleted: string;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  dict: { productList, form },
  dictParam,
  itemDeleted,
}) => {
  return (
    <Section>
      <Container className={styles.body}>
        <ProductList dict={productList} dictParam={dictParam} itemDeleted={itemDeleted} />
        <CheckoutForm dict={form} dictParam={dictParam}/>
      </Container>
    </Section>
  );
};

export default CheckoutPage;

import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import type {
  CheckoutPageDictionary,
  configuratorSectionI,
} from '@components/types';

import CheckoutForm from './CheckoutForm/CheckoutForm';
import ProductList from './ProductList/ProductList';

import styles from './CheckoutPage.module.scss';

interface CheckoutPageProps {
  dict: CheckoutPageDictionary;
  dictParam: configuratorSectionI;
  toastDict: { [key: string]: string };
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  dict: { productList, form },
  dictParam,
  toastDict,
}) => {
  return (
    <Section>
      <Container className={styles.body}>
        <ProductList
          dict={productList}
          dictParam={dictParam}
          itemDeletedToast={toastDict.itemDeleted}
        />
        <CheckoutForm dict={form} dictParam={dictParam} toastDict={toastDict} />
      </Container>
    </Section>
  );
};

export default CheckoutPage;

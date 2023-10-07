import cartProductData from '@components/helpers/cartProductData';
import { CartProductI } from '@components/types';

import ProductCard from '../ProductCard/ProductCard';

import styles from './ProductList.module.scss';

const ProductList = () => {
  return (
    <ul className={styles.list}>
      {cartProductData.map((product: CartProductI) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ul>
  );
};

export default ProductList;

'use client';
import Typography from '@components/components/Typography/Typography';
import cartProductData from '@components/helpers/cartProductData';
import { CartProductI } from '@components/types';

import { useStateContext } from '../../../../context/StateContext';
import ProductCard from '../ProductCard/ProductCard';

import styles from './ProductList.module.scss';

interface ProductListProps {
  dict: {
    deleteButtonText: string;
    totalText: string;
  };
}

const ProductList: React.FC<ProductListProps> = ({
  dict: { totalText, deleteButtonText },
}) => {
  const { totalPrice, cartItems } = useStateContext();

  return (
    <>
      {cartItems.length >= 1 && (
        <>
          <ul className={styles.list}>
            {cartItems.map((product: CartProductI) => (
              <ProductCard
                key={product.id}
                {...product}
                deleteButtonText={deleteButtonText}
              />
            ))}
          </ul>
          <div className={styles.total}>
            <Typography variant="bodyL" color="var(--cl-primary-800)">
              {totalText}
            </Typography>
            <div className={styles.price_container}>
              <Typography variant="bodyXLHeavy" className={styles.price}>
                {totalPrice}
              </Typography>
              <span>&#8372;</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductList;

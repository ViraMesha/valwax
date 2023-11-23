'use client';
import { redirect, usePathname } from 'next/navigation';
import Typography from '@components/components/Typography/Typography';
import type { CartProductI, ProductListDictionary } from '@components/types';

import { useStateContext } from '../../../../context/StateContext';
import ProductCard from '../ProductCard/ProductCard';

import styles from './ProductList.module.scss';

interface ProductListProps {
  dict: ProductListDictionary;
}

const ProductList: React.FC<ProductListProps> = ({
  dict: { totalText, deleteButtonText, descriptionPropertyNames },
}) => {
  const pathName = usePathname();
  const lang = pathName.split('/')[1];
  const { totalPrice, cartItems } = useStateContext();

  if (!cartItems.length) {
    redirect(`/${lang}`);
  }

  return (
    <div>
      {cartItems.length >= 1 && (
        <>
          <ul className={styles.list}>
            {cartItems.map((product: CartProductI) => (
              <ProductCard
                key={product.id}
                {...product}
                deleteButtonText={deleteButtonText}
                descriptionPropertyNames={descriptionPropertyNames}
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
    </div>
  );
};

export default ProductList;

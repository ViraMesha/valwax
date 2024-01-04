'use client';
import { redirect } from 'next/navigation';
import Typography from '@components/components/Typography/Typography';
import useLangFromPathname from '@components/hooks/useLangFromPathname';
import type { CartProductI, configuratorSectionI,ProductListDictionary } from '@components/types';
import { useCartContext } from '@context/CartContext';

import ProductCard from '../ProductCard/ProductCard';

import styles from './ProductList.module.scss';

interface ProductListProps {
  dict: ProductListDictionary;
  dictParam: configuratorSectionI;
  itemDeleted: string;
}

const ProductList: React.FC<ProductListProps> = ({
  dict: { totalText, deleteButtonText, descriptionPropertyNames },
  dictParam,
  itemDeleted,
}) => {
  const lang = useLangFromPathname();
  const { totalPrice, cartItems } = useCartContext();

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
                itemDeleted={itemDeleted}
                dictParam={dictParam}
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

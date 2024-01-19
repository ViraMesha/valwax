'use client';
import CartListSkeleton from '@components/components/Skeletons/CartListSkeleton/CartListSkeleton';
import Typography from '@components/components/Typography/Typography';
import { useProductList } from '@components/hooks';
import type {
  configuratorSectionI,
  ProductListDictionary,
} from '@components/types';
import { useCartContext } from '@context/CartContext';

import ProductCard from '../ProductCard/ProductCard';

import styles from './ProductList.module.scss';

interface ProductListProps {
  dict: ProductListDictionary;
  dictParam: configuratorSectionI;
  itemDeletedToast: string;
}

const ProductList: React.FC<ProductListProps> = ({
  dict: { totalText, deleteButtonText, descriptionPropertyNames },
  dictParam,
  itemDeletedToast,
}) => {
  const { cartTotalPrice } = useCartContext();

  const { products, isLoading, handleDelete, hasError } = useProductList();

  if (hasError) {
    throw new Error('Error by fetching cart data😥');
  }

  return (
    <div>
      {isLoading && <CartListSkeleton />}
      {!isLoading && !hasError && products.length >= 1 && (
        <>
          <ul className={styles.list}>
            {products.map((product: ICartProduct, index) => (
              <ProductCard
                key={
                  product.slug.includes('boxes')
                    ? `${product.id}${index}`
                    : product.id
                }
                {...product}
                deleteButtonText={deleteButtonText}
                descriptionPropertyNames={descriptionPropertyNames}
                itemDeletedToast={itemDeletedToast}
                dictParam={dictParam}
                handleDelete={handleDelete}
              />
            ))}
          </ul>
          <div className={styles.total}>
            <Typography variant="bodyL" color="var(--cl-primary-800)">
              {totalText}
            </Typography>
            <div className={styles.price_container}>
              <Typography variant="bodyXLHeavy" className={styles.price}>
                {cartTotalPrice}
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

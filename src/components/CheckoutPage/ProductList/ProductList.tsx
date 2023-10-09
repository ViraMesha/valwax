import Typography from '@components/components/Typography/Typography';
import cartProductData from '@components/helpers/cartProductData';
import { CartProductI } from '@components/types';

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
  return (
    <>
      <ul className={styles.list}>
        {cartProductData.map((product: CartProductI) => (
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
            2220
          </Typography>
          <span>&#8372;</span>
        </div>
      </div>
    </>
  );
};

export default ProductList;

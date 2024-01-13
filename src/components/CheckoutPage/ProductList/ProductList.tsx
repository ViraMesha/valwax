'use client';
import { useEffect, useState } from 'react';
import Typography from '@components/components/Typography/Typography';
import { convertToServerLocale } from '@components/helpers/convertToServerLocale';
import { useLangFromPathname } from '@components/hooks';
import type {
  CartProductI,
  configuratorSectionI,
  ProductListDictionary,
} from '@components/types';
import { useCartContext } from '@context/CartContext';
import { fetchCartBoxes } from '@lib/api-services/fetchCartBoxes';
import { fetchCartCandles } from '@lib/api-services/fetchCartCandles';

import ProductCard from '../ProductCard/ProductCard';

import styles from './ProductList.module.scss';

interface ProductListProps {
  dict: ProductListDictionary;
  dictParam: configuratorSectionI;
  itemDeleted: string;
}

interface ICartBox extends BoxDetailsI {
  aroma: number;
  quantity: number;
}

interface ICartCandle extends CandleDetailsI {
  quantity: number;
}

type IProduct = ICartCandle | ICartBox | CartProductI;

const ProductList: React.FC<ProductListProps> = ({
  dict: { totalText, deleteButtonText, descriptionPropertyNames },
  dictParam,
  itemDeleted,
}) => {
  const { cartTotalPrice, cartProducts } = useCartContext();
  const initialState = [...cartProducts.customCandles];
  const [products, setProducts] = useState<IProduct[] | []>(initialState);
  const lang = useLangFromPathname();

  const currentLang = convertToServerLocale(lang);

  const getCandles = async () => {
    if (cartProducts.candlesIds.length > 0) {
      const data = await fetchCartCandles({
        lang: currentLang,
        ids: cartProducts.candlesIds,
      });

      const modifiedCandles = cartProducts.candles?.map(
        ({ id, quantity, price }) => {
          const candleData = data.find(item => item.id === id)!;
          return { ...candleData, quantity, price };
        }
      );
      setProducts(prevProducts => [...prevProducts, ...modifiedCandles]);
    }
  };

  const getBoxes = async () => {
    if (cartProducts.boxesIds.length > 0) {
      const data = await fetchCartBoxes({
        lang: currentLang,
        ids: cartProducts.boxesIds,
      });
      const modifiedBoxes = cartProducts?.boxes.map(
        ({ id, quantity, aroma, price }) => {
          const boxData = data.find(item => item.id === id)!;
          return { ...boxData, quantity, aroma, price };
        }
      );

      setProducts(prevProducts => [...prevProducts, ...modifiedBoxes]);
    }
  };

  useEffect(() => {
    setProducts(initialState);

    getCandles();
    getBoxes();
  }, [currentLang]);

  const handleDelete = ({ id, isBox, aroma }: IHandleDeleteParams) => {
    setProducts(prevItems => {
      if (!isBox) {
        return prevItems.filter(item => item.id !== id);
      } else {
        const position = prevItems.findIndex(
          item =>
            'aroma' in item &&
            typeof aroma === 'number' &&
            item.aroma === aroma &&
            item.id === id
        );

        return position !== -1
          ? prevItems.filter((_, index) => index !== position)
          : prevItems;
      }
    });
  };

  return (
    <div>
      {products.length >= 1 && (
        <>
          <ul className={styles.list}>
            {products.map((product: IProduct, index) => (
              <ProductCard
                key={
                  product.slug.includes('boxes')
                    ? `${product.id}${index}`
                    : product.id
                }
                {...product}
                deleteButtonText={deleteButtonText}
                descriptionPropertyNames={descriptionPropertyNames}
                itemDeleted={itemDeleted}
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

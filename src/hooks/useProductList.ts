'use client';

import { useEffect, useState } from 'react';
import { fetchCartBoxes } from '@lib/api-services/fetchCartBoxes';
import { fetchCartCandles } from '@lib/api-services/fetchCartCandles';

import useStatusState from './useStatusState';

export const useProductList = ({
  cartProducts,
  currentLang,
}: {
  cartProducts: ICartProducts;
  currentLang: ServerLocale;
}) => {
  const initialState = [...cartProducts.customCandles];
  const [products, setProducts] = useState<ICartProduct[] | []>(initialState);

  const { candlesIds, boxesIds, candles, boxes } = cartProducts;

  const { state, handleStatus } = useStatusState({
    isLoading: false,
    hasError: false,
  });

  const getCandles = async () => {
    if (candlesIds.length > 0) {
      handleStatus('isLoading', true);
      const data = await fetchCartCandles({
        lang: currentLang,
        ids: candlesIds,
      });

      const modifiedCandles = candles?.map(({ id, quantity, price }) => {
        const candleData = data.find(item => item.id === id)!;
        return { ...candleData, quantity, price };
      });
      setProducts(prevProducts => [...prevProducts, ...modifiedCandles]);
      handleStatus('isLoading', false);
    }
  };

  const getBoxes = async () => {
    if (boxesIds.length > 0) {
      handleStatus('isLoading', true);
      const data = await fetchCartBoxes({
        lang: currentLang,
        ids: boxesIds,
      });
      const modifiedBoxes = boxes.map(({ id, quantity, aroma, price }) => {
        const boxData = data.find(item => item.id === id)!;
        return { ...boxData, quantity, aroma, price };
      });

      setProducts(prevProducts => [...prevProducts, ...modifiedBoxes]);
      handleStatus('isLoading', false);
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

  return { products, isLoading: state.isLoading, handleDelete };
};

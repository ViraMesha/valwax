'use client';

import { useEffect, useMemo, useState } from 'react';
import { convertToServerLocale } from '@components/helpers/convertToServerLocale';
import { extractErrorMessage } from '@components/helpers/extractErrorMessage';
import { useCartContext } from '@context/CartContext';
import { fetchCartBoxes } from '@lib/api-services/fetchCartBoxes';
import { fetchCartCandles } from '@lib/api-services/fetchCartCandles';

import { useLangFromPathname } from './useLangFromPathname';
import useStatusState from './useStatusState';

export const useProductList = () => {
  const { cartProducts } = useCartContext();
  const initialState = [...cartProducts.customCandles];
  const [products, setProducts] = useState<ICartProduct[] | []>(initialState);

  const lang = useLangFromPathname();
  const currentLang = convertToServerLocale(lang);

  const { candles, boxes } = cartProducts;

  const { state, handleStatus } = useStatusState({
    isLoading: false,
    hasError: false,
  });

  const boxesIds = useMemo(() => boxes.map(item => item.id), [boxes]);
  const candlesIds = useMemo(() => candles.map(item => item.id), [candles]);

  const getCandles = async () => {
    try {
      if (candlesIds.length > 0) {
        handleStatus('isLoading', true);
        const data = await fetchCartCandles({
          lang: currentLang,
          ids: candlesIds,
        });

        if (!Array.isArray(data)) {
          throw new Error('Error by fetching cart candles');
        }

        const modifiedCandles = candles?.map(({ id, quantity, price }) => {
          const candleData = data?.find(item => item.id === id)!;
          return { ...candleData, quantity, price };
        });
        setProducts(prevProducts => [...prevProducts, ...modifiedCandles]);
      }
    } catch (error: unknown) {
      handleStatus('hasError', true);
      const errorMessage = extractErrorMessage(error);
      console.error(errorMessage);
    } finally {
      handleStatus('isLoading', false);
    }
  };

  const getBoxes = async () => {
    try {
      if (boxesIds.length > 0) {
        handleStatus('isLoading', true);
        const data = await fetchCartBoxes({
          lang: currentLang,
          ids: boxesIds,
        });

        if (!Array.isArray(data)) {
          throw new Error('Error by fetching cart boxes');
        }

        const modifiedBoxes = boxes.map(({ id, quantity, aroma, price }) => {
          const boxData = data.find(item => item.id === id)!;
          return { ...boxData, quantity, aroma, price };
        });

        setProducts(prevProducts => [...prevProducts, ...modifiedBoxes]);
      }
    } catch (error: unknown) {
      handleStatus('hasError', true);
      const errorMessage = extractErrorMessage(error);
      console.error(errorMessage);
    } finally {
      handleStatus('isLoading', false);
    }
  };

  useEffect(() => {
    setProducts(initialState);
    getCandles();
    getBoxes();
  }, [lang]);

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

  return {
    products,
    isLoading: state.isLoading,
    handleDelete,
    hasError: state.hasError,
  };
};

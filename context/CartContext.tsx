'use client';
import { createContext, useCallback, useContext, useMemo, useRef } from 'react';
import { DECREMENT, INCREMENT } from '@components/constants';
import { showToast } from '@components/helpers/showToast';
import { useLocalStorage } from '@components/hooks/useLocalStorage';
import { ICustomCandle } from '@components/types';

interface IAddCandleToCartParams {
  id: string;
  toastMessage: string;
  quantity?: number;
  price: number;
}

interface IAddBoxToCartParams {
  id: string;
  toastMessage: string;
  aroma: number;
  quantity?: number;
  price: number;
}

interface IAddCustomCandleToCartParams {
  customCandle: ICustomCandle;
  toastMessage: string;
}

interface IToggleQuantityParams {
  id: string;
  value: typeof INCREMENT | typeof DECREMENT;
  type: 'box' | 'candle' | 'customCandle';
  aroma?: number;
}

interface IDeleteCartItemParams {
  id: string;
  type: 'box' | 'candle' | 'customCandle';
  aroma?: number;
  toastMessage: string;
}

interface CartContextProps {
  children: React.ReactNode;
}

interface CartContextI {
  cartProducts: ICartProducts;
  totalCartProducts: number;
  cartTotalPrice: number;
}

interface CartActionsContextProps {
  addCandleToCart: ({
    id,
    toastMessage,
    quantity,
  }: IAddCandleToCartParams) => void;
  addBoxToCart: ({
    id,
    toastMessage,
    aroma,
    quantity,
  }: IAddBoxToCartParams) => void;
  addCustomCandleToCart: ({
    customCandle,
    toastMessage,
  }: IAddCustomCandleToCartParams) => void;
  toggleQuantity: ({ id, value, type }: IToggleQuantityParams) => void;
  deleteCartItem: ({
    id,
    type,
    aroma,
    toastMessage,
  }: IDeleteCartItemParams) => void;
}

const CartContext = createContext<CartContextI | null>(null);
const CartActionsContext = createContext<CartActionsContextProps | null>(null);

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cartProducts, setCartProducts] = useLocalStorage<ICartProducts>(
    'cartProducts',
    {
      boxes: [],
      candles: [],
      customCandles: [],
    }
  );

  const candlesQuantity =
    cartProducts.candles.length > 0
      ? cartProducts.candles.reduce((acc, item) => acc + item.quantity, 0)
      : 0;
  const boxesQuantity =
    cartProducts.boxes.length > 0
      ? cartProducts.boxes.reduce((acc, item) => acc + item.quantity, 0)
      : 0;
  const customCandleQuantity =
    cartProducts.customCandles.length > 0
      ? cartProducts.customCandles.reduce((acc, item) => acc + item.quantity, 0)
      : 0;

  const totalCartProducts =
    candlesQuantity + boxesQuantity + customCandleQuantity ?? 0;

  const candlesTotalPrice =
    cartProducts.candles.length > 0
      ? cartProducts.candles.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0
        )
      : 0;

  const boxesTotalPrice =
    cartProducts.boxes.length > 0
      ? cartProducts.boxes.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0
        )
      : 0;

  const customTotalPrice =
    cartProducts.customCandles.length > 0
      ? cartProducts.customCandles.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0
        )
      : 0;

  const cartTotalPrice =
    candlesTotalPrice + boxesTotalPrice + customTotalPrice ?? 0;

  const addCandleToCart = useCallback(
    ({ id, toastMessage, quantity = 1, price }: IAddCandleToCartParams) => {
      setCartProducts(prevItems => {
        const isCandleInCart = prevItems.candles?.find(
          candle => candle.id === id
        );
        const updatedItems = isCandleInCart
          ? {
              ...prevItems,
              candles: prevItems.candles.map(candle => {
                if (candle.id === id) {
                  return {
                    ...candle,
                    quantity: candle.quantity + quantity,
                  };
                }
                return candle;
              }),
            }
          : {
              ...prevItems,
              candles: [...prevItems?.candles, { id, quantity, price }],
            };
        return updatedItems;
      });

      showToast(`${toastMessage}`);
    },
    [setCartProducts]
  );

  const addBoxToCart = useCallback(
    ({ id, toastMessage, aroma, quantity = 1, price }: IAddBoxToCartParams) => {
      setCartProducts(prevItems => {
        const isBoxInCart = prevItems.boxes.find(
          boxes => boxes.id === id && boxes.aroma === aroma
        );
        const updatedItems = isBoxInCart
          ? {
              ...prevItems,
              boxes: prevItems.boxes.map(box => {
                if (box.id === id && box.aroma === aroma) {
                  return {
                    ...box,
                    quantity: box.quantity + quantity,
                  };
                }
                return box;
              }),
            }
          : {
              ...prevItems,
              boxes: [...prevItems.boxes, { id, aroma, quantity, price }],
            };
        return updatedItems;
      });

      showToast(`${toastMessage}`);
    },
    [setCartProducts]
  );

  const addCustomCandleToCart = useCallback(
    ({ customCandle, toastMessage }: IAddCustomCandleToCartParams) => {
      setCartProducts(prevItems => {
        const isCustomCandleInCart = prevItems.customCandles?.find(
          candle => candle.id === customCandle.id
        );
        const updatedItems = isCustomCandleInCart
          ? {
              ...prevItems,
              customCandles: prevItems.customCandles.map(candle => {
                if (candle.id === customCandle.id) {
                  return {
                    ...candle,
                    quantity: candle.quantity + customCandle.quantity,
                  };
                }
                return candle;
              }),
            }
          : {
              ...prevItems,
              customCandles: [...prevItems?.customCandles, customCandle],
            };
        return updatedItems;
      });
      showToast(`${toastMessage}`);
    },
    [setCartProducts]
  );

  const toggleQuantity = useCallback(
    ({ id, value, type, aroma }: IToggleQuantityParams) => {
      if (type === 'customCandle') {
        setCartProducts(prevItems => {
          const updatedCustomCandles = prevItems.customCandles.map(item => {
            if (item.id === id && value === INCREMENT) {
              return { ...item, quantity: item.quantity + 1 };
            }
            if (item.id === id && value === DECREMENT) {
              return {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              };
            }
            return item;
          });

          return { ...prevItems, customCandles: updatedCustomCandles };
        });
      }

      if (type === 'candle') {
        setCartProducts(prevItems => {
          const updatedCandles = prevItems.candles.map(item => {
            if (item.id === id && value === INCREMENT) {
              return { ...item, quantity: item.quantity + 1 };
            }
            if (item.id === id && value === DECREMENT) {
              return {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              };
            }
            return item;
          });

          return { ...prevItems, candles: updatedCandles };
        });
      }

      if (type === 'box') {
        setCartProducts(prevItems => {
          const updatedBoxes = prevItems.boxes.map(item => {
            if (item.id === id && item.aroma === aroma && value === INCREMENT) {
              return { ...item, quantity: item.quantity + 1 };
            }
            if (item.id === id && item.aroma === aroma && value === DECREMENT) {
              return {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              };
            }
            return item;
          });

          return { ...prevItems, boxes: updatedBoxes };
        });
      }
    },
    [setCartProducts]
  );

  const deleteCartItem = ({
    id,
    type,
    aroma,
    toastMessage,
  }: IDeleteCartItemParams) => {
    if (type === 'customCandle') {
      setCartProducts(prevItems => {
        const updatedCustomCandles = prevItems.customCandles.filter(
          item => item.id !== id
        );
        return { ...prevItems, customCandles: updatedCustomCandles };
      });
    }

    if (type === 'candle') {
      setCartProducts(prevItems => {
        const updatedCandles = prevItems.candles.filter(item => item.id !== id);
        return {
          ...prevItems,
          candles: updatedCandles,
        };
      });
    }

    if (type === 'box') {
      setCartProducts(prevItems => {
        const boxIndex = prevItems.boxes.findIndex(
          item => item.aroma === aroma && item.id === id
        );

        const updatedBoxes =
          boxIndex !== -1
            ? prevItems.boxes.filter((_, index) => index !== boxIndex)
            : prevItems.boxes;

        return {
          ...prevItems,
          boxes: updatedBoxes,
        };
      });
    }

    showToast(`${toastMessage}`);
  };

  const contextValue = useMemo(
    () => ({
      cartProducts,
      totalCartProducts,
      cartTotalPrice,
    }),
    [cartProducts, totalCartProducts, cartTotalPrice]
  );

  return (
    <CartContext.Provider value={contextValue}>
      <CartActionsContext.Provider
        value={{
          addCandleToCart,
          addBoxToCart,
          addCustomCandleToCart,
          toggleQuantity,
          deleteCartItem,
        }}
      >
        {children}
      </CartActionsContext.Provider>
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error('useCartContext must be used within a ContextProvider');

  return context;
};

export const useCartActionsContext = () => {
  const context = useContext(CartActionsContext);
  if (!context)
    throw new Error(
      'useCartActionsContext must be used within a ContextProvider'
    );

  return context;
};

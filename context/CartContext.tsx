'use client';
import { createContext, useCallback, useContext, useMemo, useRef } from 'react';
import { DECREMENT, INCREMENT } from '@components/constants';
import { showToast } from '@components/helpers/showToast';
import { useLocalStorage } from '@components/hooks/useLocalStorage';
import { CartProductI } from '@components/types';

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
  customCandle: CartProductI;
  toastMessage: string;
}

interface IToggleQuantityParams {
  id: string;
  value: typeof INCREMENT | typeof DECREMENT;
  type: 'box' | 'candle' | 'customCandle';
  aroma?: number;
}

interface ICartProducts {
  candlesIds: string[];
  boxesIds: string[];
  boxes: { id: string; aroma: number; quantity: number; price: number }[];
  candles: { id: string; quantity: number; price: number }[];
  customCandles: CartProductI[];
}

interface CartContextProps {
  children: React.ReactNode;
}

interface CartContextI {
  cartItems: CartProductI[];
  totalPrice: number;
  totalQuantities: number;
  cartProducts: ICartProducts;
  totalCartProducts: number;
  cartTotalPrice: number;
}

interface CartActionsContextProps {
  onAdd: (
    product: CartProductI,
    quantity?: number,
    toastMessage?: string
  ) => void;
  toggleCartItemQuantity: (
    id: string,
    value: typeof INCREMENT | typeof DECREMENT
  ) => void;
  onRemove: (id: string, toastMessage?: string) => void;
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
}

const CartContext = createContext<CartContextI | null>(null);
const CartActionsContext = createContext<CartActionsContextProps | null>(null);

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cartProducts, setCartProducts] = useLocalStorage<ICartProducts>(
    'cartProducts',
    {
      candlesIds: [],
      boxesIds: [],
      boxes: [],
      candles: [],
      customCandles: [],
    }
  );

  const [cartItems, setCartItems] = useLocalStorage<CartProductI[] | []>(
    'cartItems',
    []
  );
  const [totalPrice, setTotalPrice] = useLocalStorage('totalPrice', 0);
  const [totalQuantities, setTotalQuantities] = useLocalStorage(
    'totalQuantities',
    0
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

  // Create a reference to store a found product
  const foundProductRef = useRef<CartProductI | undefined>();

  // Create a reference to store the index (initially null)
  const indexRef = useRef<number | null>(null);

  const addCandleToCart = useCallback(
    ({ id, toastMessage, quantity = 1, price }: IAddCandleToCartParams) => {
      setCartProducts(prevItems => {
        const isCandleInCart = prevItems.candles?.find(
          candle => candle.id === id
        );
        const updatedItems = isCandleInCart
          ? {
              ...prevItems,
              candlesIds: [...prevItems.candlesIds, id],
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
              candlesIds: [...prevItems.candlesIds, id],
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
              boxesIds: [...prevItems.boxesIds, id],
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
              boxesIds: [...prevItems.boxesIds, id],
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
      setCartProducts(prevItems => ({
        ...prevItems,
        customCandles: [...prevItems.customCandles, customCandle],
      }));
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

  // Define the onAdd function to add a product to the cart
  const onAdd = useCallback(
    (
      product: CartProductI,
      quantity: number = 1,
      toastMessage = 'The product was added to the cart.'
    ) => {
      // Check if the product is already in the cart
      const checkProductInCart = cartItems.find(
        (item: CartProductI) => item.id === product.id
      );

      // Update the total price and total quantities
      setTotalPrice(
        (prevTotalPrice: number) => prevTotalPrice + product.price * quantity
      );
      setTotalQuantities(
        (prevTotalQuantities: number) => prevTotalQuantities + quantity
      );

      if (checkProductInCart) {
        // If the product is already in the cart, update its quantity
        const updatedCartItems = cartItems.map((cartProduct: CartProductI) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          }
          return cartProduct;
        });
        setCartItems(updatedCartItems);
      } else {
        // If the product is not in the cart, add it
        product.quantity = quantity;
        setCartItems([...cartItems, { ...product }]);
      }
      showToast(`${toastMessage}`);
    },
    [cartItems, setCartItems, setTotalPrice, setTotalQuantities]
  );

  // Define the onRemove function to remove a product from the cart
  const onRemove = useCallback(
    (id: string, toastMessage = 'The product was successfully deleted!') => {
      // Find the product to remove
      foundProductRef.current = cartItems.find(
        (item: CartProductI) => item.id === id
      );
      if (foundProductRef.current !== undefined) {
        // Filter the cart items to remove the product
        const newCartItems = cartItems.filter(
          (cartItem: CartProductI) =>
            cartItem.id !== foundProductRef.current!.id
        );

        // Update the total price and total quantities
        setTotalPrice(
          (prevTotalPrice: number) =>
            prevTotalPrice -
            foundProductRef.current!.price * foundProductRef.current!.quantity
        );
        setTotalQuantities(
          (prevTotalQuantities: number) =>
            prevTotalQuantities - foundProductRef.current!.quantity
        );
        setCartItems(newCartItems);
      }
      showToast(`${toastMessage}`);
    },
    [cartItems, setCartItems, setTotalPrice, setTotalQuantities]
  );

  // Define the toggleCartItemQuantity function to increase or decrease the quantity of a cart item
  const toggleCartItemQuantity = useCallback(
    (id: string, value: typeof INCREMENT | typeof DECREMENT) => {
      // Find the product to update
      foundProductRef.current = cartItems.find(
        (item: CartProductI) => item.id === id
      );

      // Find the index of the product in the cart
      indexRef.current = cartItems.findIndex(
        (item: CartProductI) => item.id === id
      );

      if (foundProductRef.current) {
        const newCartItems = [...cartItems];

        if (value === INCREMENT) {
          // Increase the quantity of the product
          newCartItems[indexRef.current].quantity =
            foundProductRef.current.quantity + 1;

          // Update the cart items, total price, and total quantities
          setCartItems(newCartItems);
          setTotalPrice(
            (prevTotalPrice: number) =>
              prevTotalPrice +
              (foundProductRef.current?.price !== undefined
                ? foundProductRef.current.price
                : 0)
          );
          setTotalQuantities(
            (prevTotalQuantities: number) => prevTotalQuantities + 1
          );
        } else if (value === DECREMENT) {
          // Decrease the quantity of the product if it's greater than 1
          if (foundProductRef.current.quantity > 1) {
            newCartItems[indexRef.current].quantity =
              foundProductRef.current.quantity - 1;

            // Update the cart items, total price, and total quantities
            setCartItems(newCartItems);
            setTotalPrice(
              (prevTotalPrice: number) =>
                prevTotalPrice -
                (foundProductRef.current?.price !== undefined
                  ? foundProductRef.current.price
                  : 0)
            );
            setTotalQuantities(
              (prevTotalQuantities: number) => prevTotalQuantities - 1
            );
          }
        }
      }
    },
    [cartItems, setCartItems, setTotalPrice, setTotalQuantities]
  );

  const contextValue = useMemo(
    () => ({
      cartItems,
      totalPrice,
      totalQuantities,
      cartProducts,
      totalCartProducts,
      cartTotalPrice,
    }),
    [
      cartItems,
      totalPrice,
      totalQuantities,
      cartProducts,
      totalCartProducts,
      cartTotalPrice,
    ]
  );

  return (
    <CartContext.Provider value={contextValue}>
      <CartActionsContext.Provider
        value={{
          onAdd,
          toggleCartItemQuantity,
          onRemove,
          addCandleToCart,
          addBoxToCart,
          addCustomCandleToCart,
          toggleQuantity,
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

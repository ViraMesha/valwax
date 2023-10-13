'use client';
import { createContext, useContext, useState } from 'react';
import { CartProductI } from '@components/types';

type StateContextProps = {
  children: React.ReactNode;
};

type StateContext = {
  cartItems: CartProductI[];
  totalPrice: number;
  totalQuantities: number;
};

type ActionsContextProps = {
  onAdd: (product: CartProductI, quantity?: number) => void;
  toggleCartItemQuantity: (id: string, value: 'inc' | 'dec') => void;
  onRemove: (id: string) => void;
};

const Context = createContext<StateContext | null>(null);
const ActionsContext = createContext<ActionsContextProps | null>(null);

export const StateContext = ({ children }: StateContextProps) => {
  const [cartItems, setCartItems] = useState<CartProductI[] | []>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);

  let foundProduct: CartProductI | undefined;
  let index;

  const onAdd = (product: CartProductI, quantity: number = 1) => {
    const checkProductInCart = cartItems.find(
      (item: CartProductI) => item.id === product.id
    );
    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity);

    if (checkProductInCart) {
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
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };

  const onRemove = (id: string) => {
    foundProduct = cartItems.find(item => item.id === id);
    if (foundProduct !== undefined) {
      const newCartItems = cartItems.filter(
        cartItem => cartItem.id !== foundProduct!.id
      );
      setTotalPrice(
        prevTotalPrice =>
          prevTotalPrice - foundProduct!.price * foundProduct!.quantity
      );
      setTotalQuantities(
        prevTotalQuantities => prevTotalQuantities - foundProduct!.quantity
      );
      setCartItems(newCartItems);
    }
  };

  const toggleCartItemQuantity = (id: string, value: 'inc' | 'dec') => {
    foundProduct = cartItems.find(item => item.id === id);
    index = cartItems.findIndex(item => item.id === id);

    if (foundProduct) {
      const newCartItems = [...cartItems];

      if (value === 'inc') {
        newCartItems[index].quantity = foundProduct.quantity + 1;
        setCartItems(newCartItems);
        setTotalPrice(
          prevTotalPrice =>
            prevTotalPrice +
            (foundProduct?.price !== undefined ? foundProduct.price : 0)
        );
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);
      } else if (value === 'dec') {
        if (foundProduct.quantity > 1) {
          newCartItems[index].quantity = foundProduct.quantity - 1;
          setCartItems(newCartItems);
          setTotalPrice(
            prevTotalPrice =>
              prevTotalPrice -
              (foundProduct?.price !== undefined ? foundProduct.price : 0)
          );
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
        }
      }
    }
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        totalPrice,
        totalQuantities,
      }}
    >
      <ActionsContext.Provider
        value={{ onAdd, toggleCartItemQuantity, onRemove }}
      >
        {children}
      </ActionsContext.Provider>
    </Context.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error('useStateContext must be used within a ContextProvider');

  return context;
};

export const useStateActionsContext = () => {
  const context = useContext(ActionsContext);
  if (!context)
    throw new Error('useStateContext must be used within a ContextProvider');

  return context;
};

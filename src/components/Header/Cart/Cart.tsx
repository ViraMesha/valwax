'use client';
import Link from 'next/link';
import { BiShoppingBag } from 'react-icons/bi';
import { showToast } from '@components/helpers/showToast';
import { useCartContext } from '@context/CartContext';

import { Locale } from '../../../../i18n-config';

import styles from './Cart.module.scss';

interface CartProps {
  lang: Locale;
}

const Cart: React.FC<CartProps> = ({ lang }) => {
  const { totalQuantities, cartItems } = useCartContext();

  const handleCartClick = () => {
    showToast(
      'Your cart is empty. Please add items before proceeding to checkout.',
      'warning'
    );
  };

  return (
    <>
      {cartItems.length ? (
        <Link href={`/${lang}/checkout`}>
          <BiShoppingBag />
          {totalQuantities > 0 && (
            <span className={styles.quantity}>{totalQuantities}</span>
          )}
        </Link>
      ) : (
        <button onClick={handleCartClick} className={styles.link}>
          <BiShoppingBag />
          {totalQuantities > 0 && (
            <span className={styles.quantity}>{totalQuantities}</span>
          )}
        </button>
      )}
    </>
  );
};

export default Cart;

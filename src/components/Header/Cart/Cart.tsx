'use client';
import Link from 'next/link';
import { BiShoppingBag } from 'react-icons/bi';

import { useStateContext } from '../../../../context/StateContext';

import styles from './Cart.module.scss';

const Cart = () => {
  const { totalQuantities } = useStateContext();
  return (
    <Link href="/checkout">
      <BiShoppingBag />
      {totalQuantities > 0 && (
        <span className={styles.quantity}>{totalQuantities}</span>
      )}
    </Link>
  );
};

export default Cart;

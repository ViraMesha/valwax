'use client';
import { useRouter } from 'next/navigation';
import { BiShoppingBag } from 'react-icons/bi';
import { toast } from 'react-toastify';

import { useStateContext } from '../../../../context/StateContext';
import { Locale } from '../../../../i18n-config';

import styles from './Cart.module.scss';

interface CartProps {
  lang: Locale;
}

const Cart: React.FC<CartProps> = ({ lang }) => {
  const { totalQuantities, cartItems } = useStateContext();
  const router = useRouter();

  const handleCartClick = () => {
    if (!cartItems.length) {
      toast.warning(
        'Your cart is empty. Please add items before proceeding to checkout.'
      );
    } else {
      router.push(`/${lang}/checkout`);
    }
  };

  return (
    <>
      <button onClick={handleCartClick} className={styles.link}>
        <BiShoppingBag />
        {totalQuantities > 0 && (
          <span className={styles.quantity}>{totalQuantities}</span>
        )}
      </button>
    </>
  );
};

export default Cart;

import { useRouter } from 'next/navigation';
import Button from '@components/components/Button/Button';
import { showToast } from '@components/helpers/showToast';
import { useLangFromPathname } from '@components/hooks';
import { ButtonsDictI, CartProductI } from '@components/types';
import { useCartActionsContext } from '@context/CartContext';

import styles from './BuyButtons.module.scss';

interface IProduct extends CartProductI {
  aroma?: string | number;
}

interface BuyButtonsProps {
  product: IProduct;
  buttonsDict: ButtonsDictI;
  toastMessages: IToastMessages;
}

const BuyButtons: React.FC<BuyButtonsProps> = ({
  product,
  buttonsDict: { buyNow, addToCart },
  toastMessages,
}) => {
  const { addCandleToCart, addBoxToCart } = useCartActionsContext();
  const router = useRouter();
  const lang = useLangFromPathname();
  const isBox = product.slug === '/boxes';

  const handleBuyButton = () => {
    if (!isBox) {
      addCandleToCart({
        id: product.id,
        toastMessage: toastMessages.itemAdded,
        quantity: product.quantity,
        price: product.price,
      });
    } else if (isBox && typeof product.aroma === 'number') {
      addBoxToCart({
        id: product.id,
        toastMessage: toastMessages.itemAdded,
        aroma: product.aroma,
        quantity: product.quantity,
        price: product.price,
      });
    } else {
      showToast(toastMessages.aromaNeeded, 'warning');
    }
  };

  const handleBuyNowButtonClick = () => {
    if (!isBox) {
      addCandleToCart({
        id: product.id,
        toastMessage: toastMessages.itemAdded,
        quantity: product.quantity,
        price: product.price,
      });
      router.push(`/${lang}/checkout`);
    } else if (isBox && typeof product.aroma === 'number') {
      addBoxToCart({
        id: product.id,
        toastMessage: toastMessages.itemAdded,
        aroma: product.aroma,
        quantity: product.quantity,
        price: product.price,
      });
      router.push(`/${lang}/checkout`);
    } else {
      showToast(toastMessages.aromaNeeded, 'warning');
    }
  };

  return (
    <div className={styles.candleBuyWrapper}>
      <Button
        variant="secondary"
        className={styles.candleBuy}
        type="button"
        onClick={handleBuyButton}
      >
        {addToCart}
      </Button>
      <Button
        variant="primary"
        className={styles.candleBuy}
        type="button"
        onClick={handleBuyNowButtonClick}
      >
        {buyNow}
      </Button>
    </div>
  );
};

export default BuyButtons;

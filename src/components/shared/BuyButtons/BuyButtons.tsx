import { useRouter } from 'next/navigation';
import Button from '@components/components/Button/Button';
import { showToast } from '@components/helpers/showToast';
import { useLangFromPathname } from '@components/hooks';
import { ButtonsDictI } from '@components/types';
import { useCartActionsContext } from '@context/CartContext';

import styles from './BuyButtons.module.scss';

interface BuyButtonsProps {
  buttonsDict: ButtonsDictI;
  toastMessages: IToastMessages;
  product: {
    id: string;
    slug: string;
    quantity: number;
    price: number;
    aroma?: string | number;
  };
}

const BuyButtons: React.FC<BuyButtonsProps> = ({
  product,
  buttonsDict: { buyNow, addToCart },
  toastMessages,
}) => {
  const { addCandleToCart, addBoxToCart } = useCartActionsContext();
  const router = useRouter();
  const lang = useLangFromPathname();

  const { id, slug, quantity, price } = product;
  const isBox = slug === '/boxes';

  const handleBuyButton = () => {
    if (!isBox) {
      addCandleToCart({
        id,
        toastMessage: toastMessages.itemAdded,
        quantity,
        price,
      });
    } else if (isBox && typeof product.aroma === 'number') {
      addBoxToCart({
        id,
        toastMessage: toastMessages.itemAdded,
        aroma: product.aroma,
        quantity,
        price,
      });
    } else {
      showToast(toastMessages.aromaNeeded, 'warning');
    }
  };

  const handleBuyNowButtonClick = () => {
    if (!isBox) {
      addCandleToCart({
        id,
        toastMessage: toastMessages.itemAdded,
        quantity,
        price,
      });
      router.push(`/${lang}/checkout`);
    } else if (isBox && typeof product.aroma === 'number') {
      addBoxToCart({
        id,
        toastMessage: toastMessages.itemAdded,
        aroma: product.aroma,
        quantity,
        price,
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

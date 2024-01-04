import { usePathname, useRouter } from 'next/navigation';
import Button from '@components/components/Button/Button';
import { ButtonsDictI, CartProductI } from '@components/types';
import { useCartActionsContext } from '@context/CartContext';

import styles from './BuyButtons.module.scss';

interface BuyButtonsProps {
  product: CartProductI;
  buttonsDict: ButtonsDictI;
  itemAdded: string;
}

const BuyButtons: React.FC<BuyButtonsProps> = ({
  product,
  buttonsDict: { buyNow, addToCart },
  itemAdded,
}) => {
  const { onAdd } = useCartActionsContext();
  const pathName = usePathname();
  const router = useRouter();
  const lang = pathName.split('/')[1];

  const handleBuyNowButtonClick = () => {
    onAdd(product, product.quantity);
    router.push(`/${lang}/checkout`);
  };

  return (
    <div className={styles.candleBuyWrapper}>
      <Button
        variant="secondary"
        className={styles.candleBuy}
        type="button"
        onClick={() => onAdd(product, product.quantity, itemAdded)}
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

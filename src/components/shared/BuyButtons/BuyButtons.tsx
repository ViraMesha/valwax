import { usePathname, useRouter } from 'next/navigation';
import Button from '@components/components/Button/Button';
import { CartProductI } from '@components/types';

import { useStateActionsContext } from '../../../../context/StateContext';

import styles from './BuyButtons.module.scss';

const BuyButtons = ({ product }: { product: CartProductI }) => {
  const { onAdd } = useStateActionsContext();
  const pathName = usePathname();
  const router = useRouter();
  const lang = pathName.split('/')[1];

  const handleBuyNowButtonClick = () => {
    onAdd(product, product.quantity);
    router.push(`/${lang}/checkout`);
  };

  return (
    <div className={styles.candeleBuyWrapper}>
      <Button
        variant="secondary"
        className={styles.candeleBuy}
        type="button"
        onClick={() => onAdd(product, product.quantity)}
      >
        До кошика
      </Button>
      <Button
        variant="primary"
        className={styles.candeleBuy}
        type="button"
        onClick={handleBuyNowButtonClick}
      >
        Купити зараз
      </Button>
    </div>
  );
};

export default BuyButtons;

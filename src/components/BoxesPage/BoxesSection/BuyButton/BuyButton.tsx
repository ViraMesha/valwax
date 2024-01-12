'use client';
import Button from '@components/components/Button/Button';
import { useCartActionsContext } from '@context/CartContext';

interface BuyButtonProps {
  product: {
    id: string;
    img: string;
    title: string;
    price: number;
    link: string;
    quantity: number;
    description: string;
  };
  buyBtn: string;
  toastMessage: string;
}

const BuyButton: React.FC<BuyButtonProps> = ({
  product,
  buyBtn,
  toastMessage,
}) => {
  const { onAdd, addBoxToCart } = useCartActionsContext();
  return (
    <Button
      variant="primary"
      type="button"
      onClick={() =>
        addBoxToCart({
          id: product.id,
          toastMessage,
          aroma: 0,
          quantity: 1,
          price: product.price,
        })
      }
    >
      {buyBtn}
    </Button>
  );
};

export default BuyButton;

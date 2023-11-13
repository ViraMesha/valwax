'use client';
import Button from '@components/components/Button/Button';

import { useStateActionsContext } from '../../../../../context/StateContext';

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
}

const BuyButton: React.FC<BuyButtonProps> = ({ product, buyBtn }) => {
  const { onAdd } = useStateActionsContext();
  return (
    <Button variant="primary" type="button" onClick={() => onAdd(product)}>
      {buyBtn}
    </Button>
  );
};

export default BuyButton;

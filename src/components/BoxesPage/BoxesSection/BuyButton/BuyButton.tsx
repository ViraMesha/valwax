'use client';
import Button from '@components/components/Button/Button';

import { useStateActionsContext } from '../../../../../context/StateContext';

const BuyButton = ({
  product,
  buyBtn,
}: {
  product: {
    id: string;
    img: string;
    title: string;
    price: number;
    link: string;
    quantity: number;
  };
  buyBtn: string;
}) => {
  const { onAdd } = useStateActionsContext();
  return (
    <Button variant="primary" type="button" onClick={() => onAdd(product)}>
      {buyBtn}
    </Button>
  );
};

export default BuyButton;

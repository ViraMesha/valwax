'use client';
import Button from '@components/components/Button/Button';

import { useStateActionsContext } from '../../../../../context/StateContext';

import styles from './AddButton.module.scss';

const AddButton = ({
  product,
}: {
  product: {
    id: string;
    img: string;
    title: string;
    price: number;
    link: string;
    quantity: number;
  };
}) => {
  const { onAdd } = useStateActionsContext();
  return (
    <Button
      variant="primary"
      type="button"
      onClick={() => onAdd(product)}
    >
      купити
    </Button>
  );
};

export default AddButton;

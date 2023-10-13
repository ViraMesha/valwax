'use client';
import Typography from '@components/components/Typography/Typography';

import { useStateActionsContext } from '../../../../../context/StateContext';

import styles from './DeleteButton.module.scss';

const DeleteButton = ({
  id,
  deleteButtonText,
}: {
  id: string;
  deleteButtonText: string;
}) => {
  const { onRemove } = useStateActionsContext();
  return (
    <button type="button" onClick={() => onRemove(id)}>
      <Typography variant="bodyS" className={styles.delete}>
        {deleteButtonText}
      </Typography>
    </button>
  );
};

export default DeleteButton;

import type { BoxDetailsI, BoxesSectionProps } from '@components/types';

import BoxesCard from '../BoxesCard/BoxesCard';

import styles from './BoxesList.module.scss';

const BoxesList = async ({ dict, boxes, toastMessage }: BoxesSectionProps) => {
  const items = await boxes;
  return (
    <ul className={styles.list}>
      {items.map((box: BoxDetailsI) => (
        <BoxesCard
          key={box.id}
          box={box}
          dict={dict}
          toastMessage={toastMessage}
        />
      ))}
    </ul>
  );
};

export default BoxesList;

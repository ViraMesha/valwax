import type { BoxesSectionProps } from '@components/types';

import BoxesCard from '../BoxesCard/BoxesCard';
import { BoxI } from '../boxesData';

import styles from './BoxesList.module.scss';

const BoxesList = async ({ dict, boxes, toastMessage }: BoxesSectionProps) => {
  const items = await boxes;
  return (
    <ul className={styles.list}>
      {items.map((box: BoxI) => (
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

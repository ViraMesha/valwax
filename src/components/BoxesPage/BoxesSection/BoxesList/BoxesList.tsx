import BoxesCard from '../BoxesCard/BoxesCard';
import boxes, { BoxI } from '../boxesData';

import styles from './BoxesList.module.scss';

const BoxesList = async ({
  dict,
  boxes,
}: {
  dict: {
    buyBtn: string;
    reviewBtn: string;
  };
  boxes: Promise<BoxI[]>;
}) => {
  const items = await boxes;
  return (
    <ul className={styles.list}>
      {items.map((box: BoxI) => (
        <BoxesCard key={box.id} box={box} dict={dict} />
      ))}
    </ul>
  );
};

export default BoxesList;

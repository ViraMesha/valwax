import BoxesCard from '../BoxesCard/BoxesCard';
import boxes, { BoxI } from '../boxesData';

import styles from './BoxesList.module.scss';

const BoxesList = ({
  dict,
}: {
  dict: {
    buyBtn: string;
    reviewBtn: string;
  };
}) => {
  return (
    <ul className={styles.list}>
      {boxes.map((box: BoxI) => (
        <BoxesCard key={box.id} box={box} dict={dict} />
      ))}
    </ul>
  );
};

export default BoxesList;

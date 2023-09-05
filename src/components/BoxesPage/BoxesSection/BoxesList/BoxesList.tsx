import BoxesCard from '../BoxesCard/BoxesCard';
import boxes, { BoxI } from '../boxesData';

import styles from './BoxesList.module.scss';

const BoxesList = () => {
  return (
    <ul className={styles.list}>
      {boxes.map((box: BoxI) => (
        <BoxesCard key={box.id} {...box} />
      ))}
    </ul>
  );
};

export default BoxesList;

import { CandleI } from '../../../../lib/types';
import CandleItemCard from '../CandleItemCard/CandleItemCard';

import styles from './CandleList.module.scss';

interface CandleListProps {
  items: CandleI[];
}

const CandleList: React.FC<CandleListProps> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item: CandleI) => (
        <CandleItemCard key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default CandleList;

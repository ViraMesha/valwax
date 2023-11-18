import { CandleI } from '../../../types';
import CandleItemCard from '../CandleItemCard/CandleItemCard';

import styles from './CandleList.module.scss';

interface CandleListProps {
  items: Promise<CandleI[]>;
}

const CandleList: React.FC<CandleListProps> = async ({ items }) => {
  const candles = await items;
  return (
    <ul className={styles.list}>
      {candles.map((item: CandleI) => (
        <CandleItemCard key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default CandleList;

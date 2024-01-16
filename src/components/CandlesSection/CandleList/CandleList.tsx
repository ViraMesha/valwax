import type { CandleDetailsI } from '../../../types';
import MobilePagination from '../../shared/MobilePagination/MobilePagination';
import CandleItemCard from '../CandleItemCard/CandleItemCard';

import styles from './CandleList.module.scss';

interface CandleListProps {
  items: Promise<CandleApiResponse>;
}

const CandleList: React.FC<CandleListProps> = async ({ items }) => {
  const { candles, totalPages } = await items;
  return (
    <>
      {candles && candles.length > 0 ? (
        <ul className={styles.list}>
          {candles.map((item: CandleDetailsI) => (
            <CandleItemCard key={item.id} {...item} />
          ))}
          <MobilePagination totalPages={totalPages} />
        </ul>
      ) : null}
    </>
  );
};

export default CandleList;

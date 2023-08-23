import CandleCard from '../CandleCard/CandleCard';
import Container from '../Container/Container';

import { CandleI } from './candleData';

import styles from './CandleList.module.css';

interface CandleListProps {
  items: CandleI[];
}

const CandleList: React.FC<CandleListProps> = ({ items }) => {
  return (
    <Container>
      <ul className={styles.list}>
        {items.map((item: CandleI) => (
          <CandleCard key={item.id} {...item} />
        ))}
      </ul>
    </Container>
  );
};

export default CandleList;

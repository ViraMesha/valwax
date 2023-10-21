import Image from 'next/image';
import Typography from '@components/components/Typography/Typography';
import { BoxDetailsI, CandleDetailsI } from '@components/types';
import Image1 from 'public/images/aboutUs/Image1.jpg';

import styles from './SearchItem.module.scss';

export interface SearchResultProps {
  result: CandleDetailsI | BoxDetailsI;
}

const SearchItem: React.FC<SearchResultProps> = ({ result }) => {
  
  return (
    <li className={styles.searchItem}>
      <Image src={Image1} alt={result.title} width={30} height={32} className={styles.searchImage} />
      <Typography variant="bodyS">{result.title}</Typography>
      <Typography variant="bodyS">{result.price}</Typography>
      <span>&#8372;</span>
    </li>
  );
};

export default SearchItem;
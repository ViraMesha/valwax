import Image from 'next/image';
import Link from 'next/link';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';
import { ProductDetails } from '@components/types';
import Image1 from 'public/images/aboutUs/Image1.jpg';

import styles from './SearchItem.module.scss';

export interface SearchResultProps {
  result: ProductDetails;
}

const SearchItem: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <li>
      <Link
        href={`/candles/soy-candles/${result.id}`}
        className={styles.searchLink}
      >
        <div className={styles.searchWrapper}>
          <Image
            src={Image1}
            alt={result.title}
            width={30}
            height={32}
            className={styles.searchImage}
          />
          <Typography variant="bodyS">{result.title}</Typography>
        </div>
        <Price price={result.price} variant="secondary" />
      </Link>
    </li>
  );
};

export default SearchItem;

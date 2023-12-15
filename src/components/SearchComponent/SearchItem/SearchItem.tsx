import Image from 'next/image';
import Link from 'next/link';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';
import { ProductDetails } from '@components/types';
import { useModalContext } from '@context/ModalContext';
import Image1 from '@images/aboutUs/Image1.jpg';

import styles from './SearchItem.module.scss';

export interface SearchResultProps {
  result: Omit<ProductDetails, 'titleEn' | 'titleUa'>;
}

const SearchItem: React.FC<SearchResultProps> = ({ result }) => {
  const { toggleModal } = useModalContext();

  const handleItemClick = () => {
    toggleModal();
  };

  return (
    <li onClick={handleItemClick}>
      <Link href={`${result.slug}/${result.id}`} className={styles.searchLink}>
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

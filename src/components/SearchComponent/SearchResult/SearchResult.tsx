import { useRef } from 'react';
import CustomScrollBar from '@components/components/CustomScrollBar/CustomScrollBar';

import SearchItem from '../SearchItem/SearchItem';

import styles from './SearchResult.module.scss';

interface SearchResultProps {
  searchResults: SearchResultItem[];
}

interface SearchResultItem {
  id: number;
  text: string;
}
const SearchResult: React.FC<SearchResultProps> = ({ searchResults }) => {
  const SearchWrapper = useRef<HTMLDivElement | null>(null);

    return (
    <div className={styles.customScrollbar}>
      <CustomScrollBar root={SearchWrapper}>
        <ul className={styles.searchList}>
          {searchResults.map(result => (
            <SearchItem key={result.id} result={result}></SearchItem>
          ))}
        </ul>
      </CustomScrollBar>
    </div>
  );
};

export default SearchResult;
import { useRef } from 'react';
import useScrollbar from '@components/hooks/useScrollbar';

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
  const hasScroll = searchResults.length > 6;

  useScrollbar({ root: SearchWrapper, hasScroll });

  return (
    <div
      style={{
        height: hasScroll ? '50px' : 'auto',
        minHeight: '50px',
      }}
      ref={SearchWrapper}
    >
      <ul className={styles.searchList}>
        {searchResults.map(result => (
          <SearchItem key={result.id} result={result}></SearchItem>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;

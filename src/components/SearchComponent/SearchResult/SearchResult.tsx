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
  const hasScroll = searchResults.length > 6;

  // useScrollbar({ root: SearchWrapper, hasScroll });

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
// <div id="customScrollbarDiv"
    //   style={{
    //     height: hasScroll ? '385px' : 'auto',
    //     minHeight: '385px',
    //   }}
    //   ref={SearchWrapper}
    //   // className={styles.customScrollbar}
    // >
    //   <ul className={styles.searchList}>
    //     {searchResults.map(result => (
    //       <SearchItem key={result.id} result={result}></SearchItem>
    //     ))}
    //   </ul>
    // </div>
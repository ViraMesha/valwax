import React, { useRef } from 'react';
import CustomScrollBar from '@components/components/CustomScrollBar/CustomScrollBar';
import { BoxDetailsI, CandleDetailsI } from '@components/types';

import SearchItem from '../SearchItem/SearchItem';

import styles from './SearchResult.module.scss';

export interface SearchResultProps {
  searchResults: (CandleDetailsI | BoxDetailsI)[];
}

const SearchResult: React.FC<SearchResultProps> = ({ searchResults }) => {
  const SearchWrapper = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.customScrollbar}>
      <CustomScrollBar root={SearchWrapper}>
        <ul className={styles.searchList}>
          {searchResults.map(result => (
            <SearchItem key={result.id} result={result}/>
          ))}
        </ul>
      </CustomScrollBar>
    </div>
  );
};

export default SearchResult;

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { BoxDetailsI, CandleDetailsI } from '@components/types';

import Input from '../../Input/Input';
import SearchResult from '../SearchResult/SearchResult';

import mockSearchResults from './mockSearchResults';

import styles from './Search.module.scss';


interface SearchProps {
  onClose: () => void;
}

const Search: React.FC<SearchProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<
    (CandleDetailsI | BoxDetailsI)[]
  >([]);

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.searchWrapper}>
        <AiOutlineSearch
          style={{ strokeWidth: '2px' }}
          className={styles.searchIcon}
          color="var(--cl-gray-700)"
        />
        <Input
          type="text"
          placeholder="Пошук"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <AiOutlineClose
          style={{ strokeWidth: '4px' }}
          className={styles.closeIcon}
          color="var(--cl-gray-700)"
          onClick={onClose}
        />
      </div>
      <div className={styles.resultWrapper}>
        {mockSearchResults.length > 0 && (
          <div className={styles.searchWrapper}>
            <SearchResult searchResults={mockSearchResults} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

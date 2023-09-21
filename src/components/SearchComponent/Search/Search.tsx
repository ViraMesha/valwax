import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

import Input from '../../Input/Input';
import SearchResult from '../SearchResult/SearchResult';

import styles from './Search.module.scss';

const mockSearchResults = [
  { id: 1, text: 'Пошуковий результат 1' },
  { id: 2, text: 'Пошуковий результат 2' },
  { id: 3, text: 'Пошуковий результат 3' },
  { id: 4, text: 'Пошуковий результат 4' },
  { id: 5, text: 'Пошуковий результат 5' },
  { id: 6, text: 'Пошуковий результат 6' },
  { id: 7, text: 'Пошуковий результат 7' },
  { id: 8, text: 'Пошуковий результат 8' },
];
interface SearchResult {
  id: number;
  name: string;
}

interface SearchProps {
  onClose: () => void;
}

const Search: React.FC<SearchProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

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

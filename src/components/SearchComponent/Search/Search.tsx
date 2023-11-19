import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import Typography from '@components/components/Typography/Typography';
import { ProductDetails } from '@components/types';
import { useWindowSize } from 'usehooks-ts';
import debounce from 'lodash.debounce';

import { useModalContext } from '../../../../context/ModalContext';
import Input from '../../Input/Input';
import SearchResult from '../SearchResult/SearchResult';

import mockSearchResults from './mockSearchResults';

import styles from './Search.module.scss';

interface SearchProps {
  onClose: () => void;
  dict: { noResults: string };
}

const Search: React.FC<SearchProps> = ({ onClose, dict }) => {
  const { isModal } = useModalContext();

  const resultWrapperRef = useRef<HTMLDivElement | null>(null);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ProductDetails[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);

  const { width } = useWindowSize();
  const isLargeScreen = width >= 1024;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = debounce(() => {
    const filteredResults = mockSearchResults.filter(result =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
    setShowNoResults(filteredResults.length === 0);
  }, 500);

  return isModal ? (
    <div
      className={`${styles.modalWrapper} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.searchWrapper}>
        <AiOutlineSearch
          style={{ strokeWidth: '2px' }}
          className={styles.searchIcon}
          color="var(--cl-gray-700)"
          onClick={handleSearch}
        />
        <Input
          type="text"
          placeholder="Пошук"
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
            handleSearch();
          }}
          className={styles.searchInput}
        />
        <AiOutlineClose
          style={{ strokeWidth: '4px' }}
          className={styles.closeIcon}
          color="var(--cl-gray-700)"
          onClick={onClose}
        />
      </div>

      {showNoResults && (
        <Typography
          variant="bodyS"
          color="var(--cl-gray-400)"
          className={styles.noResults}
        >
          {dict.noResults}
        </Typography>
      )}

      {!showNoResults && searchResults.length > 0 && (
        <div ref={resultWrapperRef} className={styles.resultWrapper}>
          <SearchResult searchResults={searchResults} />
        </div>
      )}
    </div>
  ) : null;
};

export default Search;

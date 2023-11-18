import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import Typography from '@components/components/Typography/Typography';
import { ProductDetails } from '@components/types';
import { useWindowSize } from 'usehooks-ts';
import debounce from 'lodash.debounce';

import { fetchSearchResults } from '../../../../lib/api-services/api';
import Input from '../../Input/Input';
import SearchResult from '../SearchResult/SearchResult';

import styles from './Search.module.scss';

interface SearchProps {
  onClose: () => void;
  dict: { noResults: string };
}

const Search: React.FC<SearchProps> = ({ onClose, dict }) => {
  const resultWrapperRef = useRef<HTMLDivElement | null>(null);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ProductDetails[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1024;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (value: string) => {
    setSearchResults([]);
    setSearchQuery(value);
    handleSearch(value);
  };

  const handleSearch = debounce(async searchQuery => {
    console.log(searchQuery.length);
    if (searchQuery.trim().length < 3) {
      return;
    }
    setIsLoading(true);
    const results = await fetchSearchResults(searchQuery.toLowerCase().trim());
    const resultValues = [...results.boxList, ...results.candleList];
    setIsLoading(false);
    setSearchResults(resultValues);
    setShowNoResults(resultValues.length === 0);
  }, 500);

  console.log(searchResults);

  useEffect(() => {
    const resultWrapperElement = resultWrapperRef.current;

    if (resultWrapperElement) {
      const numberOfResults = searchResults.length;
      const minResultHeight = isLargeScreen ? 45 : 30;
      const gap = isLargeScreen ? 20 : 10;
      const maxResultHeight = isLargeScreen ? 460 : 280;
      const padding = isLargeScreen ? 38 : 20;

      let newHeight;

      if (numberOfResults >= 6) {
        newHeight = maxResultHeight;
      } else {
        newHeight =
          numberOfResults * minResultHeight +
          2 * padding +
          (numberOfResults - 1) * gap;
      }

      resultWrapperElement.style.height = `${newHeight}px`;
    }
  }, [searchResults, isLargeScreen]);

  return (
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
          onChange={e => handleChange(e.target.value)}
          className={styles.searchInput}
        />
        <AiOutlineClose
          style={{ strokeWidth: '4px' }}
          className={styles.closeIcon}
          color="var(--cl-gray-700)"
          onClick={onClose}
        />
        {isLoading && (
          <div className={styles.loaderWrapper}>
            <span className={styles.loader}></span>
          </div>
        )}
      </div>

      {showNoResults && (
        <Typography
          variant="bodyS"
          color="var(--cl-gray-600)"
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
  );
};

export default Search;

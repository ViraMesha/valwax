import React, { useEffect, useRef,useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { BoxDetailsI, CandleDetailsI } from '@components/types';
import debounce from 'lodash.debounce';

import Input from '../../Input/Input';
import SearchResult from '../SearchResult/SearchResult';

import mockSearchResults from './mockSearchResults';

import styles from './Search.module.scss';


interface SearchProps {
  onClose: () => void;
}

const Search: React.FC<SearchProps> = ({ onClose }) => {
  const resultWrapperRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<
    (CandleDetailsI | BoxDetailsI)[]
    >([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  
   const handleSearch = debounce(() => {
    const filteredResults = mockSearchResults.filter((result) =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);

     console.log(filteredResults)
  }, 500);

  useEffect(() => {
  if (searchResults.length > 0) {
  
    const resultWrapperElement = resultWrapperRef.current;

    if (resultWrapperElement) {
    
      
    }
  }
}, [searchResults]);
  
  return (
     <div className={`${styles.modalWrapper} ${isVisible ? styles.visible : ''}`}>
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
          onChange={(e) => {
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


      {searchResults.length > 0 && (
      <div ref={resultWrapperRef} className={styles.resultWrapper}>
          <div className={styles.searchWrapper}>
            <SearchResult searchResults={searchResults} />
          </div>
        </div>
      )
      }
      
    </div>
  );
};

export default Search;

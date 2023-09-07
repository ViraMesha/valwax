import React, { useEffect, useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import useModal from '@components/hooks/useModal';

import Input from '../Input/Input';
import Modal from '../Modal/Modal';

import styles from './Search.module.scss';

interface SearchResult {
  id: number;
  name: string;
}

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const { isModal, onBackdropClick } = useModal();
  console.log('search isModal', isModal);

  return (
    <div>
      {isModal ? (
        <Modal onBackdropClick={onBackdropClick}>
          <div className="search-input">
            <FaSearch className="search-icon" />
            <Input
              type="text"
              placeholder="Пошук"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            {searchQuery && <FaTimes className="clear-icon" />}
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Search;

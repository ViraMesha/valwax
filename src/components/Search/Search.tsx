import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

import useModal from '../../hooks/useModal';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';

interface SearchResult {
  id: number;
  name: string;
}

interface SearchComponentProps {
  onClose: () => void;
}

const SearchComponent: React.FC<SearchComponentProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
     const { isModal, toggleModal, onBackdropClick } = useModal();

  

  return (
    <div className="search-component" onClick={() => toggleModal()}>
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
            {searchQuery && (
              <FaTimes className="clear-icon"  />
            )}
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default SearchComponent;

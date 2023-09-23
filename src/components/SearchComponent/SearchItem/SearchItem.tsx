import styles from './SearchItem.module.scss';

interface SearchItemProps {
  result: SearchResult;
}

interface SearchResult {
  id: number;
  text: string;
}

const SearchItem: React.FC<SearchItemProps> = ({ result }) => {
  return <li className={styles.searchItem}>{result.text}</li>;
};

export default SearchItem;

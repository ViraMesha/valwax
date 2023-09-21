interface SearchItemProps {
  result: SearchResult;
}

interface SearchResult {
  id: number;
  text: string;
}

const SearchItem: React.FC<SearchItemProps> = ({ result }) => {
  return <li>{result.text}</li>;
};

export default SearchItem;

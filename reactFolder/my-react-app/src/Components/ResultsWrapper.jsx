import { useState, createContext } from 'react';
import SearchContainer from './SearchContainer';
import ResultContainer from './ResultContainer';

export const SearchContext = createContext();

export default function SearchResultWrapper() {
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemType, setItemType] = useState('');

  return (
    <SearchContext.Provider value={{ 
      apiResponse, 
      setApiResponse, 
      isLoading, 
      setIsLoading,
      searchTerm,
      setSearchTerm,
      itemType,
      setItemType
    }}>
      <div className="LeftContentInner">
      <SearchContainer />
      <ResultContainer />
      </div>

    </SearchContext.Provider>
  );
}
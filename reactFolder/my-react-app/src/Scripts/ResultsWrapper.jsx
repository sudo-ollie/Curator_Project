import { useState, createContext } from 'react';
import SearchContainer from '../Components/SearchContainer';
import ResultContainer from '../Components/ResultContainer';

export const SearchContext = createContext();

export default function SearchResultWrapper() {
  const [apiResponse, setApiResponse] = useState(null);
  const [searchState, setSearchState] = useState(false)

  return (
    <SearchContext.Provider value={{ apiResponse, setApiResponse }}>
      <SearchContainer updateSearchState={setSearchState} />
      <ResultContainer searchState={searchState} />
    </SearchContext.Provider>
  );
}
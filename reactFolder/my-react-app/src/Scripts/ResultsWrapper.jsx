import { useState, createContext } from 'react';
import SearchContainer from '../Components/SearchContainer';
import ResultContainer from '../Components/ResultContainer';

export const SearchContext = createContext();

export default function SearchResultWrapper() {
  const [apiResponse, setApiResponse] = useState(null);

  return (
    <SearchContext.Provider value={{ apiResponse, setApiResponse }}>
      <SearchContainer />
      <ResultContainer />
    </SearchContext.Provider>
  );
}
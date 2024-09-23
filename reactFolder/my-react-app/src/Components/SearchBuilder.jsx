import "../Styling/search_builder_styling.css";
import { useContext, useEffect, useState } from "react";
import SearchButton from "../Components/SearchButton";
import { SearchContext } from "./ResultsWrapper";

export default function SearchBuilder() {
  const { searchTerm, setSearchTerm, itemType, setItemType } = useContext(SearchContext);
  const [validSearch, setValidSearch] = useState(false);

  useEffect(() => {
    setValidSearch(searchTerm.length > 0 && searchTerm.trim() !== "");
  }, [searchTerm]);

  return (
    <>
      <div className="SearchInputDiv">
        <h5>Search</h5>
        <div className="inline-display">
          <label htmlFor="searchInput">Search Term : </label>
          <input
            type="text"
            id="searchInput"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="inline-display">
          <label htmlFor="searchInput">Item Type : </label>
          <input
            type="text"
            id="itemTyped"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
          />
        </div>
      </div>
      <div className="SearchBtnDiv">
        <SearchButton validSearch={validSearch} />
      </div>
    </>
  );
}
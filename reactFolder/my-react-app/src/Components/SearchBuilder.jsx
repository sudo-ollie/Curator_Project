import "../Styling/search_builder_styling.css";
import { useEffect, useState } from "react";
import SearchButton from "../Components/SearchButton";
import SaveSearch from "../Components/SaveSearch";

export default function SearchBuilder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemType, setItemType] = useState("");
  const [validSearch, setValidSearch] = useState(false);

  useEffect(() => {
    searchTerm.length > 0 && searchTerm.trim() !== "" ? setValidSearch(true) : setValidSearch(false);
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
        <SaveSearch />
        <SearchButton searchTerm={searchTerm.trim()} validSearch={validSearch} />
      </div>
    </>
  );
}

import "../Styling/search_builder_styling.css";
import { useContext, useEffect, useState } from "react";
import SearchButton from "../Components/SearchButton";
import { SearchContext } from "./ResultsWrapper";

export default function SearchBuilder() {
  const { searchTerm, setSearchTerm, itemType, setItemType } =
    useContext(SearchContext);
  const [validSearch, setValidSearch] = useState(false);
  const [reqBody, setReqBody] = useState({
    keyword: "",
    medium: [],
    hasimage: "1",
    location: [],
    classification: [],
    title: "",
  });

  useEffect(() => {
    setValidSearch(searchTerm.length > 0 && searchTerm.trim() !== "");
    // Update reqBody when searchTerm or itemType changes
    setReqBody((prevReqBody) => ({
      ...prevReqBody,
      keyword: searchTerm,
      classification: itemType ? [itemType] : [],
    }));
  }, [searchTerm, itemType]);

  const handleInputChange = (e, field) => {
    const value = e.target.value;

    if (
      field === "medium" ||
      field === "location" ||
      field === "classification"
    ) {
      setReqBody((prev) => ({
        ...prev,
        [field]: value.split(",").map((item) => item.trim()),
      }));
    } else {
      setReqBody((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleHasImageToggle = (e) => {
    setReqBody((prev) => ({
      ...prev,
      hasimage: e.target.checked ? "1" : "0",
    }));
  };

  return (
    <div className="SearchInputDiv">
      <div className="titleContainer">
        <h4>Public Exhibitions</h4>
        <h6>Create Your Search Here</h6>
      </div>
      <div className="searchInputContainer">
      <div className="input-row">
  <div className="inline-display">
    <label htmlFor="searchInput">Search Term:</label>
    <input
      type="text"
      id="searchInput"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
  <div className="inline-display">
    <label htmlFor="itemType">Item Type:</label>
    <input
      type="text"
      id="itemType"
      value={itemType}
      onChange={(e) => setItemType(e.target.value)}
    />
  </div>
  
  <div className="inline-display">
    <label htmlFor="title">Title:</label>
    <input
      type="text"
      id="title"
      value={reqBody.title}
      onChange={(e) => handleInputChange(e, "title")}
    />
  </div>

  {/* <div className="inline-display">
    <label htmlFor="keyword">Keyword:</label>
    <input
      type="text"
      id="keyword"
      value={reqBody.keyword}
      onChange={(e) => handleInputChange(e, "keyword")}
    />
  </div> */}
</div>
<div className="input-row">
  <div className="inline-display">
    <label htmlFor="medium">Medium:</label>
    <input
      type="text"
      id="medium"
      value={reqBody.medium.join(", ")}
      placeholder="Word or comma separated list"
      onChange={(e) => handleInputChange(e, "medium")}
    />
  </div>
  <div className="inline-display">
    <label htmlFor="location">Location:</label>
    <input
      type="text"
      id="location"
      value={reqBody.location.join(", ")}
      placeholder="Word or comma separated list"
      onChange={(e) => handleInputChange(e, "location")}
    />
  </div>
  <div className="inline-display">
    <label htmlFor="classification">Classification:</label>
    <input
      type="text"
      id="classification"
      placeholder="Word or comma separated list"
      value={reqBody.classification.join(", ")}
      onChange={(e) => handleInputChange(e, "classification")}
    />
  </div>
</div>
<div className="input-row last-row">
  <div className="SearchBtnDiv">
    <div className="hasImageToggle">
      <input
        type="checkbox"
        id="hasImage"
        checked={reqBody.hasimage === "1"}
        onChange={handleHasImageToggle}
      />
      <label htmlFor="hasImage">Has Image</label>
    </div>
    <SearchButton validSearch={validSearch} reqBody={reqBody} />
  </div>
</div>
      </div>
    </div>
  );
}

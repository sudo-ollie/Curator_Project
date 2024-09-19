import { useContext, useState } from "react";
import { SearchContext } from "../Scripts/ResultsWrapper";

export default function ResultContainer() {
  const { apiResponse } = useContext(SearchContext);
  const [sortedResponse, setSortedResponse] = useState(apiResponse);

  function sortResults(criteria) {
    let sorted = [...apiResponse];

    switch(criteria) {
      case 'hasImage':
        sorted.sort((a, b) => (b.ImageUrl ? 1 : 0) - (a.ImageUrl ? 1 : 0));
        break;
      case 'artistAsc':
        sorted.sort((a, b) => a.ArtistName.localeCompare(b.ArtistName));
        break;
      case 'titleAsc':
        sorted.sort((a, b) => a.ArticleClassification.localeCompare(b.ArticleClassification));
        break;
      case 'idAsc':
        sorted.sort((a, b) => a.ArticleId - b.ArticleId);
        break;
      case 'idDesc':
        sorted.sort((a, b) => b.ArticleId - a.ArticleId);
        break;
    }

    setSortedResponse(sorted);
  }

  return (
    <div className="SearchResultContainer">
      <div className="filterContainer">
        <p>Results</p>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{border: "#F7E7DC"}}
          >
            Sort Options
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#" onClick={() => sortResults('hasImage')}>
                Has Image
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => sortResults('artistAsc')}>
                Artist Alphabetical
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => sortResults('titleAsc')}>
                Title Alphabetical
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => sortResults('idAsc')}>
                ID Asc
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => sortResults('idDesc')}>
                ID Desc
              </a>
            </li>
          </ul>
        </div>
      </div>
      {sortedResponse ? (
        sortedResponse.map((element, index) => (
          <div key={index} className="searchResult">
            <div className="seachResult_img">
              {element.ImageUrl ? (
                <img
                  src={element.ImageUrl}
                  alt=""
                  style={{ maxHeight: "200px", maxWidth: "200px" }}
                />
              ) : (
                <img
                  src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                  alt=""
                  style={{ maxHeight: "200px", maxWidth: "200px" }}
                />
              )}
            </div>
            <div className="searchResult_content">
              <ul>
                <li>{`Artist : ${element.ArtistName}`}</li>
                <li>{`Acquisition Method : ${element.CreditLine}`}</li>
                <li>{`Category : ${element.ArticleDivision}`}</li>
                <li>{`Article ID : ${element.ArticleId}`}</li>
                <li>{`Article Medium : ${element.ArticleClassification}`}</li>
              </ul>
            </div>
          </div>
        ))
      ) : (
        <p>No results yet</p>
      )}
    </div>
  );
}
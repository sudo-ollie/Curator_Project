import { useContext, useState } from "react";
import { SearchContext } from "./ResultsWrapper";
import ItemCard from "./ItemCard";

export default function ResultContainer() {
  const { apiResponse, isLoading } = useContext(SearchContext);
  const [sortedResponse, setSortedResponse] = useState(apiResponse);

  function sortResults(criteria) {
    let sorted = [...apiResponse];

    switch (criteria) {
      case "hasImage":
        sorted.sort((a, b) => (b.ImageUrl ? 1 : 0) - (a.ImageUrl ? 1 : 0));
        break;
      case "artistAsc":
        sorted.sort((a, b) => a.ArtistName.localeCompare(b.ArtistName));
        break;
      case "titleAsc":
        sorted.sort((a, b) =>
          a.ArticleClassification.localeCompare(b.ArticleClassification)
        );
        break;
      case "idAsc":
        sorted.sort((a, b) => a.ArticleId - b.ArticleId);
        break;
      case "idDesc":
        sorted.sort((a, b) => b.ArticleId - a.ArticleId);
        break;
    }

    setSortedResponse(sorted);
  }

  return (
    <div className="SearchResultContainer">
      <div className="filterContainer">
      <p>{sortedResponse ? `(${sortedResponse.length} Results)` : "Results Container"}</p>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ border: "#F7E7DC" }}
          >
            Sort Options
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => sortResults("hasImage")}
              >
                Has Image
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => sortResults("artistAsc")}
              >
                Artist Alphabetical
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => sortResults("titleAsc")}
              >
                Title Alphabetical
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => sortResults("idAsc")}
              >
                ID Asc
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => sortResults("idDesc")}
              >
                ID Desc
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="searchResultGrid">
        {isLoading ? (
          <div>
          <div className="spinner-border" role="status"></div>
          <h5>Loading...</h5>
          </div>
        ) : sortedResponse ? (
          sortedResponse.map((element, index) => (
            <ItemCard element={element} index={index} key={index} />
          ))
        ) : (
          <p>No results yet</p>
        )}
      </div>
    </div>
  );
}

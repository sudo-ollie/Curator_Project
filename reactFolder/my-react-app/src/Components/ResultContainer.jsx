import { useContext, useState, useEffect } from "react";
import { LoadLikedItems } from './LoadLikedItems';
import { SearchContext } from "./ResultsWrapper";
import CreateExhib from "./CreateExhib";
import ItemCard from "./ItemCard";
import { useUser } from "@clerk/clerk-react";




export default function ResultContainer() {
  const { likedItems, addLikedItem, removeLikedItem, isItemLiked } = LoadLikedItems();
  const { apiResponse, isLoading } = useContext(SearchContext);
  const [sortedResponse, setSortedResponse] = useState([]);
  const { user, isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    setSortedResponse(apiResponse);
  }, [apiResponse]);

  function sortResults(criteria) {
    let sorted = [...sortedResponse];

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

  let content;
  if (isLoading) {
    content = (
      <div>
        <div className="spinner-border" role="status"></div>
        <h5>Loading...</h5>
      </div>
    );
  } else if (sortedResponse && sortedResponse.length > 0) {
    content = sortedResponse.map((element, index) => (
      <ItemCard element={element} index={index} key={index} />
    ));
  } else {
    content = <p>No results yet</p>;
  }

  return (
    <div className="SearchResultContainer">
      <div className="filterContainer">
        <p>
          {sortedResponse
            ? `(${sortedResponse.length} Results Found)`
            : "Results Container"}
        </p>
        <div className="creatorContainer">
          <p>{likedItems.length} Items Selected</p>
          {isLoaded && isSignedIn && user?.id ? (
            <CreateExhib likedItems={likedItems} userID={user.id}/>
          ) : isLoaded && !isSignedIn ? (
            <p>Please sign in to create an exhibit</p>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
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
      <div className="searchResultGrid">{content}</div>
    </div>
  );
}

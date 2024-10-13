import { useContext, useState, useEffect } from "react";
import { LoadLikedItems } from "./LoadLikedItems";
import { SearchContext } from "./ResultsWrapper";
import CreateExhib from "./CreateExhib";
import ItemCard from "./ItemCard";
import { useUser } from "@clerk/clerk-react";
import "../Styling/SearchResultStyling.css";

export default function ResultContainer() {
  const { likedItems } = LoadLikedItems();
  const { apiResponse, isLoading } = useContext(SearchContext);
  const [sortedResponse, setSortedResponse] = useState([]);
  const { user, isLoaded, isSignedIn } = useUser();

  console.log(apiResponse);

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
        sorted.sort((a, b) => {
          if (a.ArtistName == null && b.ArtistName == null) {
            return 0; // Both are null, consider them equal
          } else if (a.ArtistName == null) {
            return 1; // Null values should come last, so a is "greater"
          } else if (b.ArtistName == null) {
            return -1; // Null values should come last, so b is "greater"
          } else {
            return a.ArtistName.localeCompare(b.ArtistName);
          }
        });
        break;
      case "titleAsc":
        sorted.sort((a, b) => a.Title.localeCompare(b.Title));
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
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div className="spinner-border" role="status" style={{ marginBottom: '1rem' }}></div>
          <h5>Content Loading...</h5>
        </div>
      </div>
    );
  } else if (sortedResponse && sortedResponse.length > 0) {
    content = (
      <div className="contentContainer gridModifier">
        {sortedResponse.map((element, index) => (
          <div key={index} className="item-wrapper">
            <ItemCard element={element} index={index} />
          </div>
        ))}
      </div>
    );
  } else if (apiResponse == null) {
    content = (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        <h5>Make a search to view articles. If your search failed, try something less broad.</h5>
      </div>
    );
  } else {
    content = (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
      }}>
        <h5>{apiResponse.length} - Articles Found</h5>
      </div>
    );
  }
  return (
    <div className="SearchResultContainer">
      <div className="titleContainer">
        <div className="leftContent">
          <div className="creatorContainer">
            {isLoaded && isSignedIn && user?.id ? (
              <CreateExhib likedItems={likedItems} userID={user.id} />
            ) : isLoaded && !isSignedIn ? (
              <p>Please sign in to create an exhibit</p>
            ) : (
              <p>Loading user data...</p>
            )}
            <h6>{likedItems.length} Items Selected</h6>
          </div>
        </div>
        <div className="centerContent">
          <h4>Results Container</h4>
          <h6>
            {sortedResponse
              ? `(${sortedResponse.length} Results Found)`
              : "No Results"}
          </h6>
        </div>
        <div className="rightContent">
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
      </div>
      <div className="exhibitionResults">{content}</div>
    </div>
  );
}

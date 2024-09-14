import { useContext } from "react";
import { SearchContext } from "../Scripts/ResultsWrapper";

export default function ResultContainer() {
  const { apiResponse } = useContext(SearchContext);

  return (
    <div className="SearchResultContainer">
      <p>Results</p>
      {apiResponse ? (
        apiResponse.map((element, index) => (
          <div key={index} className="searchResult">
            <div className="seachResult_img">
              {Object.entries(element).map(([key, value]) => {
                if (key === "ImageUrl" && value === null) {
                  return (
                    <img
                      key={key}
                      src={
                        "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                      }
                      alt=""
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    />
                  );
                } else if (key === "ImageUrl") {
                  return (
                    <img
                      key={key}
                      src={value}
                      alt=""
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    />
                  );
                }
              })}
            </div>
            <div className="searchResult_content">
              <ul>
                {Object.entries(element).map(([key, value]) => {
                  if (key !== "ImageUrl") {
                    switch (key) {
                      case "CreditLine":
                        return (
                          <li key={key}>{`Acquisistion Method : ${value}`}</li>
                        );
                      case "ArticleDivision":
                        return <li key={key}>{`Category : ${value}`}</li>;
                      case "ArticleId":
                        return <li key={key}>{`Article ID : ${value}`}</li>;
                      case "ArticleClassification":
                        return <li key={key}>{`Article Medium : ${value}`}</li>;
                      default:
                        return <li key={key}>{`Artist : ${value}`}</li>;
                    }
                  }
                })}
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

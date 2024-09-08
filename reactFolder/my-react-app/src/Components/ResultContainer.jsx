import { useContext } from "react";
import { SearchContext } from "../Scripts/ResultsWrapper";

export default function ResultContainer() {
  const { apiResponse } = useContext(SearchContext);

  return (
    <div className="SearchResultContainer">
      <p>Results</p>
      {apiResponse ? (
        apiResponse.map((element, index) => (
          <div 
            key={index} 
            style={{
              border: "solid 2px red", 
              margin: "2px", 
              borderRadius: "calc(var(--radius) - 2 * var(--gap))"
            }}
          >
            {Object.entries(element).map(([key, value]) => {
              if (key === "ImageUrl" && value === null) {
                return <img key={key} src={"https://www.svgrepo.com/show/508699/landscape-placeholder.svg"} alt="" style={{maxHeight: "100px", maxWidth: "100px"}} />;
              }
              else if (key === "ImageUrl") {
                return <img key={key} src={value} alt="" style={{maxHeight: "100px", maxWidth: "100px"}}/>;
              } 
              else {
                return <p key={key}>{`${key}: ${value}`}</p>;
              }
            })}
          </div>
        ))
      ) : (
        <p>No results yet</p>
      )}
    </div>
  );
}
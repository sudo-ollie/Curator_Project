import { useEffect, useState } from "react";
import "../Styling/publicExhibitions.css"

function PublicExhibitions({ userID }) {
  const [publicExhibitions, setPublicExhibitions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(
          `https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/publicExhibitions`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        setPublicExhibitions(result.exhibitions);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An Error Occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userID]);

  if (isLoading) return <div>Loading exhibitions...</div>;
  if (!publicExhibitions) return <div>No exhibition data available</div>;

  return (
    <div className="publicExhibitionContainer">
      <div className="titleContainer">
      <h4>Public Exhibitions</h4>
      <p>{publicExhibitions.length} exhibition(s) found</p>
      </div>
      {error !== null ? (
        <div className="exhibitionResults">
          Error: {error}
          </div>
      ) : (
        <div className="exhibitionResults">
          {publicExhibitions.length === 0 ? (
            <p>No public exhibitions found.</p>
          ) : (
            <div className="exhibitionResults">
              {publicExhibitions.map((exhibition) => (
                <div key={exhibition.ExhibitionID} className="exhibitionIndividual">
                  <h5>{exhibition.ExhibitionName}</h5>
                  <p>ID: {exhibition.ExhibitionID}</p>
                  <p>Length: {exhibition.ExhibitionLength}</p>
                  <p>Public: {exhibition.ExhibitionPublic ? "Yes" : "No"}</p>
                  <p>User ID: {exhibition.UserID}</p>
                  <h6>Exhibit Content:</h6>
                  <ul>
                    {exhibition.ExhibitContent.flatMap((content, contentIndex) =>
                      Object.entries(content).map(([element, value], index) => (
                        <li key={`${exhibition.ExhibitionID}-${contentIndex}-${element}-${index}`}>
                          {element}: {value}
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="buttonContainer">
        <button>See More</button>
      </div>
    </div>
  );
}

export default PublicExhibitions;
import { useEffect, useState } from "react";
import ExhibitionCard from "./ExhibitionCard";
import "../Styling/publicExhibitions.css";

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
  if (error) return <div>Error: {error}</div>;
  if (!publicExhibitions) return <div>No exhibition data available</div>;

  return (
    <div className="publicExhibitionContainer">
      <div className="titleContainer">
        <h4>Public Exhibitions</h4>
        <p>{publicExhibitions.length} exhibition(s) found</p>
      </div>
      <div className="exhibitionResults">
        {publicExhibitions.length === 0 ? (
          <p>No public exhibitions found.</p>
        ) : (
          publicExhibitions.map((exhibition, index) => (
            <ExhibitionCard exhibitionObject={exhibition} key={index} />
          ))
        )}
      </div>
      <div className="buttonContainer">
        <button>Explore More</button>
      </div>
    </div>
  );
}

export default PublicExhibitions;
import { useEffect, useState } from "react";
import ExhibitionCard from "./ExhibitionCard";
import "../Styling/ExplorePublicExhib.css";

function ExploreExhibPub({ userID }) {
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
      {/* <div className="titleContainer">
        <h4>Public Exhibitions</h4>
        {publicExhibitions.length === 0 ? (
          <p>No public exhibtions found, be the first to make one!</p>
        ) : publicExhibitions.length > 1 ? (
          <p>{publicExhibitions.length} exhibitions found</p>
        ) : (
          <p>{publicExhibitions.length} exhibition found</p>
        )}
      </div> */}
      <div className="exhibitionResults">
        {publicExhibitions.length === 0 ? (
          <p>No public exhibitions found.</p>
        ) : (
          publicExhibitions.map((exhibition, index) => (
            <ExhibitionCard exhibitionObject={exhibition} key={index} />
          ))
        )}
      </div>
    </div>
  );
}

export default ExploreExhibPub;

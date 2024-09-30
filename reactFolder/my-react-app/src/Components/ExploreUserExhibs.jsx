import { useEffect, useState } from "react";
import ExhibitionCard from "./ExhibitionCard";
import "../Styling/publicExhibitions.css";

function ExploreUserExhibitions({ userID, userName }) {
  const [userExhibitions, setUserExhibitions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(
          `https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/userExhibitions?userID=${userID}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setUserExhibitions(result.exhibitions);
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
  if (!userExhibitions) return <div>No exhibition data available</div>;

  return (
    <div className="publicExhibitionContainer">
      <div className="titleContainer">
        <h4>Your Exhibitions</h4>
        <p>{userExhibitions.length} exhibition(s) found</p>
      </div>
      <div className="exhibitionResults">
        {userExhibitions.length === 0 ? (
          <p>No public exhibitions found.</p>
        ) : (
          userExhibitions.map((exhibition, index) => (
            <ExhibitionCard exhibitionObject={exhibition} key={index} />
          ))
        )}
      </div>
    </div>
  );
}

export default ExploreUserExhibitions;

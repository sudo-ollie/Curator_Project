import { useEffect, useState } from "react";
import axios from "axios";
import ExhibitionCard from "./ExhibitionCard";
import "../Styling/publicExhibitions.css";

function UserExhibitions({ userID }) {
  const [userExhibitions, setUserExhibitions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get(
          `https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/userExhibitions?userID=${userID}`,
  
        );
        setUserExhibitions(response.data.exhibitions);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching exhibitions");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userID]);

  if (isLoading) return <div>Loading exhibitions...</div>;
  if (error) return <div>{error}</div>;
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

export default UserExhibitions;
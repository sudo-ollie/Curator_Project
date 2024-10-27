import { useEffect, useState } from "react";
import axios from "axios";
import ExhibitionCard from "./ExhibitionCard";
import "../Styling/publicExhibitions.css";

function UserExhibitions({ userID, refreshTrigger }) {
  const [userExhibitions, setUserExhibitions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        const response = await axios.get(
          `https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/userExhibitions?userID=${userID}`,
          config
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
  }, [userID, refreshTrigger]);

  if (isLoading) return <div>Loading exhibitions...</div>;
  if (error) return <div>{error}</div>;
  if (!userExhibitions) return <div>No exhibition data available</div>;

  return (
    <div className="TopRightInner">
      <div className="titleContainer">
        <h4>Your Exhibitions</h4>
        {userExhibitions.length === 0 ? (
          <h6>No public exhibtions found, be the first to make one!</h6>
        ) : userExhibitions.length > 1 ? (
          <h6>{userExhibitions.length} exhibitions found</h6>
        ) : (
          <h6>{userExhibitions.length} exhibition found</h6>
        )}
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
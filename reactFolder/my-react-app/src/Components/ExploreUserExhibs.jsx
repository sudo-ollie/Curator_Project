import { useEffect, useState } from "react";
import ExhibitionCard from "./ExhibitionCard";
import "../Styling/publicExhibitions.css";
import axios from "axios";

function MyExibitions_Page({ userID }) {
  const [userExhibitions, setUserExhibitions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get(
          `https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/userExhibitions?userID=${userID}`,
        );
        console.log(`USER-ID : ${userID}`)
        console.log(response.data)
        setUserExhibitions(response.data.exhibitions);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("An Error Occurred");
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchUserData();
  }, [userID]);

  if (isLoading) return <div>Loading exhibitions...</div>;
  if (error) return <div>Error Fetching Exhibitions. Try again</div>
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

export default MyExibitions_Page;

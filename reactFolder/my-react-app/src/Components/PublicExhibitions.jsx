import { useEffect, useState } from "react";
import ExhibitionCard from "./ExhibitionCard";
import "../Styling/publicExhibitions.css";
import axios from "axios";

function PublicExhibitions({ userID }) {
  const [publicExhibitions, setPublicExhibitions] = useState(null);
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
          "https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/publicExhibitions",config
        );
        setPublicExhibitions(response.data.exhibitions);
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
    <div className="BottomRightInner">
      <div className="titleContainer">
        <h4>Public Exhibitions</h4>
        {publicExhibitions.length === 0 ? (
          <h6>No public exhibtions found, be the first to make one!</h6>
        ) : publicExhibitions.length > 1 ? (
          <h6>{publicExhibitions.length} exhibitions found</h6>
        ) : (
          <h6>{publicExhibitions.length} exhibition found</h6>
        )}
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
    </div>
  );
}

export default PublicExhibitions;

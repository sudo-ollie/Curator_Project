import { useEffect, useState } from "react";
import ExhibitionCard from "./ExhibitionCard";
import "../Styling/ExplorePublicExhib.css";
import axios from "axios";

function ExploreExhibitions_Page({ userID }) {
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
          'https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/publicExhibitions',
          config        );
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
    <div className="publicExhibitionContainer">
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

export default ExploreExhibitions_Page;

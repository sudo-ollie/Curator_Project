import { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "../Components/TopBar";
import ExhibitionCard from "./ExhibitionCard";
import "../Styling/MyExhibitionsStyling.css"

function ExploreUserExhibs({ userID }) {
  const [userExhibitions, setUserExhibitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        const response = await axios.get(
          `https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/userExhibitions?userID=${userID}`,config
        );
        if (response.data && Array.isArray(response.data.exhibitions)) {
          setUserExhibitions(response.data.exhibitions);
        } else {
          console.error("Non-Valid Response :", response.data);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(err)
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userID]);

  let content;
  if (loading) {
    content = (
      <div className="noResultsDiv">
        <div className="spinner-border" role="status"></div>
        <h5>Loading...</h5>
      </div>
    );
  } else if (error) {
    content = <div className="noResultsDiv">Error: {error.message}</div>;
  } else if (!userExhibitions || userExhibitions.length === 0) {
    content = (
      <div className="noResultsDiv">
        <h3>),:</h3>
        <p>No exhibitions found</p>
      </div>
    );
  } else {
    content = (
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(20%, 1fr))',
        gap: '1rem',
        width: '100%'
      }}>
        {userExhibitions.map((exhibition, index) => (
          <div key={index} style={{
            width: '100%',
            minWidth: '250px',
            maxWidth: '100%',
          }}>
            <ExhibitionCard exhibitionObject={exhibition} index={index} />
          </div>
        ))}
      </div>
    );
  }

  return (
      <div id="ContentContainer">
        <TopBar />
          <div className="MainContentInnerExplore">
            <div className="titleContainerExplore">
              <h4>Your Exhibitions</h4>
              {userExhibitions.length === 0 ? (
                <h6>No public exhibtions found, be the first to make one!</h6>
              ) : userExhibitions.length > 1 ? (
                <h6>{userExhibitions.length} exhibitions found</h6>
              ) : (
                <h6>{userExhibitions.length} exhibition found</h6>
              )}
            </div>
            <div className="exhibitionResultsExplore">
              {userExhibitions.length === 0 ? (
                <p>No public exhibitions found.</p>
              ) : (
                userExhibitions.map((exhibition, index) => (
                  <div key={index}>
                    <ExhibitionCard exhibitionObject={exhibition} id="ExhibitionCard"/>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
    );
}

export default ExploreUserExhibs;
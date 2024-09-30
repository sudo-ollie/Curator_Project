import { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "../Components/TopBar";
import ExhibitionCard from "./ExhibitionCard";
import "../Styling/MyExhibitionsStyling.css"

function ExplorePubExhibs() {
  const [userExhibitions, setUserExhibitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/publicExhibitions`
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
  }, []);

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
      <div className="searchResultGrid">
        {userExhibitions.map((exhibition, index) => (
          <div key={index} className="item-wrapper">
            <ExhibitionCard exhibitionObject={exhibition} index={index} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div id="ContentContainer">
      <TopBar />
      <div className="MainContent">
        <div className="MainContentInner">
          <div className="titleDiv">
            <h4>Explore Public Exhibitions</h4>
            {userExhibitions && userExhibitions.length > 0 && (
              <h6>Total Exhibitions: {userExhibitions.length}</h6>
            )}
          </div>
          {content}
        </div>
      </div>
    </div>
  );
}

export default ExplorePubExhibs;
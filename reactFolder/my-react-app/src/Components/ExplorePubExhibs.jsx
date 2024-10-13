import { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "../Components/TopBar";
import ExhibitionCard from "./ExhibitionCard";
import "../Styling/publicExhibitions.css";

function ExplorePubExhibs() {
  const [userExhibitions, setUserExhibitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await axios.get(
          `https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/publicExhibitions`,
          config
        );
        if (response.data && Array.isArray(response.data.exhibitions)) {
          setUserExhibitions(response.data.exhibitions);
        } else {
          console.error("Non-Valid Response :", response.data);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div id="ContentContainer">
      <TopBar />
        <div className="MainContentInnerExplore">
          <div className="titleContainerExplore">
            <h4>Public Exhibitions</h4>
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

export default ExplorePubExhibs;

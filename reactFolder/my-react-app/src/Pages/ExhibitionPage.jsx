import "../Styling/exploreExhib.css";
import TopBar from "../Components/TopBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemCard from "../Components/ItemCard";

// import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";

function ExhibitionPage() {
  const { id } = useParams();
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/loadExhibit?exhibitionID=${id}`
        );
        setItemData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div id="ContentContainer">
      <TopBar />
      <div className="MainContent">
        <div className="MainContentInner">
          <div className="titleDiv">
            <h4>Explore Public Exhibitions</h4>
          </div>
          <div className="contentDiv">
            {itemData.length === 0 ? (
              <p>No public exhibitions found.</p>
            ) : (
              itemData.map((element, index) => (
                <ItemCard element={element} index={index} key={index} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExhibitionPage;

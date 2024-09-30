import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TopBar from "../Components/TopBar";
import ItemCardExhib from "../Components/ItemCardExhib";
import "../Styling/exploreExhib.css";

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
        setItemData(response.data.exhibitions[0]);
        setLoading(false);
      } catch (err) {
        setError(err)
        console.error(err);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  let content;
  if (loading) {
    content = (
      <div>
        <div className="spinner-border" role="status"></div>
        <h5>Loading...</h5>
      </div>
    );
  } else if (error) {
    content = <div>{error}</div>;
  } else if (!itemData) {
    content = (
      <div className="backupDiv">
        <strong>
          <h3>),:</h3>
          <p>No results yet</p>
        </strong>
      </div>
    );
  } else {
    content = itemData.ExhibitContent && itemData.ExhibitContent.length > 0 ? (
      itemData.ExhibitContent.map((element, index) => (
        <div key={index} className="item-wrapper">
          <ItemCardExhib element={element} index={index} />
        </div>
      ))
    ) : (
      <div className="backupDiv">
        <strong>
          <h3>),:</h3>
          <p>No items in this exhibition</p>
        </strong>
      </div>
    );
  }

  return (
    <div id="ContentContainer">
      <TopBar />
      <div className="MainContent">
        <div className="MainContentInner">
          {itemData && (
            <div className="titleDiv">
              <h4>{itemData.ExhibitionName}</h4>
              <h6>
                Exhibition Length: {itemData.ExhibitionLength} | Exhibition ID:{" "}
                {itemData.ExhibitionID}
              </h6>
            </div>
          )}
          {itemData && itemData.ExhibitContent && itemData.ExhibitContent.length > 0 ? (
            <div className="searchResultGrid searchResultGridContainer">
              {content}
            </div>
          ) : (
            <div className="noResultsDiv">{content}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExhibitionPage;
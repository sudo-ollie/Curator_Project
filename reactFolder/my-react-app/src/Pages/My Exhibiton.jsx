import { useState, useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import TopBar from "../Components/TopBar";
import ItemCardExhib2 from "../Components/ItemCardExhib2";
import LikedItemsContext from "../Components/LikedItemsContext";
import "../Styling/exploreExhib.css";

function MyExhibition() {
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { likedItems } = useContext(LikedItemsContext);

  useEffect(() => {
    console.log("Component mounted or likedItems changed:", likedItems);
    if (location.pathname === '/MyExhibition') {
      if (likedItems && likedItems.length > 0) {
        setItemData({
          ExhibitionName: "My Liked Items",
          ExhibitContent: likedItems
        });
        setLoading(false);
      } else {
        setError("No liked items found");
        setLoading(false);
      }
    }
  }, [location.pathname, likedItems]);

  console.log("Liked items:", likedItems);
  console.log("Item data:", itemData);

  let content;
  if (loading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>{error}</div>;
  } else if (!itemData || !itemData.ExhibitContent || itemData.ExhibitContent.length === 0) {
    content = (
      <div className="backupDiv">
        <strong>
          <h3>),:</h3>
          <p>No items in this exhibition</p>
        </strong>
      </div>
    );
  } else {
    console.log("Is Array:", Array.isArray(itemData.ExhibitContent));
    content = itemData.ExhibitContent.map((element, index) => (
      <div key={index} className="item-wrapper">
        <ItemCardExhib2 element={element} index={index} />
      </div>
    ));
  }
  
  return (
    <div id="ContentContainer">
      <TopBar />
      <div className="MainContentInnerExplore">
        <div className="titleContainerExplore">
          {itemData ? (
            <>
              <h4>{itemData.ExhibitionName}</h4>
              <h6>
                {itemData.ExhibitContent.length === 0
                  ? "No items found within this exhibition."
                  : `${itemData.ExhibitContent.length} exhibition item${itemData.ExhibitContent.length !== 1 ? 's' : ''} found`}
              </h6>
            </>
          ) : (
            <h4>Exhibition Not Found</h4>
          )}
        </div>
        <div className="exhibitionResultsExplore">
          {content}
        </div>
      </div>
    </div>
  );
}

export default MyExhibition;
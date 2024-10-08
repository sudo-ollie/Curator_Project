import { useEffect, useState } from "react";
import "../Styling/ItemCardStyling.css";
import { LoadLikedItems } from "./LoadLikedItems";

export default function ItemCard({ element, index }) {
  const { addLikedItem, removeLikedItem, isItemLiked } = LoadLikedItems();
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    setFavourite(isItemLiked(element.ArticleId));
  }, [element.ArticleId, isItemLiked]);

  function handleLike() {
    if (favourite) {
      removeLikedItem(element.ArticleId);
    } else {
      addLikedItem(element);
    }
    setFavourite(!favourite);
  }

  return (
    <div key={index} className="ItemCardContainer">
      <div className="ItemCardImage">
        <div className="ItemCardImage_img">
          <img
            src={
              element.ImageUrl ||
              "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            }
            alt=""
          />
        </div>
      </div>
      <div className="ItemCardContent">
        <div className="ItemCardTitle">
          <h3>Item Title: {element.Title || "Unknown"}</h3>
          <h5>{element.ArtistName || "Unknown Artist"}</h5>
        </div>
        <div className="ItemCardDetails">
          <div className="fieldContainer">
            <p id="content">
              {element.Century || element.CreationDate || "Unknown"}
            </p>
            <p id="subHeading">Century</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.Technique || "Unknown"}</p>
            <p id="subHeading">Medium</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.ArticleDivision || "Unknown"}</p>
            <p id="subHeading">Category</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.CreditLine || "Unknown"}</p>
            <p id="subHeading">Credit Line</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.ArticleId || "Unknown"}</p>
            <p id="subHeading">ArticleID</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.ArticleClassification || "Unknown"}</p>
            <p id="subHeading">Classification</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.Date || "Unknown"}</p>
            <p id="subHeading">Creation Date</p>
          </div>
        </div>
        <div className="btnContainer">
        <a
            href={element.ItemURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined prevent-select">
              travel_explore
            </span>
          </a>
          <div className="ItemCard_likeicon" onClick={handleLike}>
            <span
              id="likeIcon"
              className={`material-icons prevent-select ${
                favourite ? "favorite" : ""
              }`}
            >
              {favourite ? "favorite" : "favorite_border"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

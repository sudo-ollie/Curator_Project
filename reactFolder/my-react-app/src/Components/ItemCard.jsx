import { useState } from "react";
import "../Styling/ItemCardStyling.css";

export default function ItemCard({ element, index }) {
  const [favourite, setFavourite] = useState(false);

  function handleLike() {
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
          <h3>Item Title : X</h3>
          <h5>{element.ArtistName}</h5>
        </div>
        <div className="ItemCardDetails">
          <div className="fieldContainer">
            <p id="content">X</p>
            <p id="subHeading">Century</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.ArticleDivision}</p>
            <p id="subHeading">Medium</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.ArticleClassification}</p>
            <p id="subHeading">Category</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.ArticleId}</p>
            <p id="subHeading">Credit Line</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.ArticleId}</p>
            <p id="subHeading">ArticleID</p>
          </div>
        </div>
        <div className="btnContainer">
          <span className="material-symbols-outlined prevent-select">travel_explore</span>
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

import "../Styling/ExhibItemStyling.css";

export default function ItemCardExhib2({ element, index }) {
  return (
    <div key={index} className="ItemCardContainer">
      <div className="ItemCardImage">
        <div className="ItemCardImage_img">
          <img
            src={
              element.ImageUrl ||
              "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            }
            alt="ItemCardImage"
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
              {element.Century || element.Date || "Unknown"}
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
            href={element.ItemObjectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined prevent-select">
              travel_explore
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

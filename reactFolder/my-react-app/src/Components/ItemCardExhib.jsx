import "../Styling/ExhibItemStyling.css";

export default function ItemCardExhib({ element, index }) {
  return (
    <div key={index} className="ItemCardContainer">
      <div className="ItemCardImage">
        <div className="ItemCardImage_img">
          <img
            src={
              element.ItemURL ||
              "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            }
            alt=""
          />
        </div>
      </div>
      <div className="ItemCardContent">
        <div className="ItemCardTitle">
          <h3>Item Title: {element.ItemTitle || "Unknown"}</h3>
          <h5>{element.ArtistName || "Unknown Artist"}</h5>
        </div>
        <div className="ItemCardDetails">
          <div className="fieldContainer">
            <p id="content">
              {element.ItemCentury || element.CreationDate || "Unknown"}
            </p>
            <p id="subHeading">Century</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.ItemTechnique || "Unknown"}</p>
            <p id="subHeading">Medium</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.ItemDepartment || "Unknown"}</p>
            <p id="subHeading">Category</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.ItemCreditline || "Unknown"}</p>
            <p id="subHeading">Credit Line</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.ItemID || "Unknown"}</p>
            <p id="subHeading">ArticleID</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.ItemClassification || "Unknown"}</p>
            <p id="subHeading">Classification</p>
          </div>
          <div className="fieldContainer">
            <p id="content">{element.CreationDate || "Unknown"}</p>
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

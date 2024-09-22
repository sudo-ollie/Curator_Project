import "../Styling/ItemCardStyling.css";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />

export default function ItemCard() {
  return (
    <div className="ItemCardContainer">
      <div className="ItemCardImage">
        <div className="ItemCardImage_img">
          <img
            src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            alt=""
          />
        </div>
        <div className="ItemCard_likeicon">
          <img
            src="https://www.shareicon.net/data/2015/12/02/680965_button_512x512.png"
            alt=""
            style={{width:"30px" , height:"30px"}}
          />
        </div>
      </div>
      <div className="ItemCardContent">
        <div className="ItemCardTitle">
          <h3>Item Title</h3>
          <h5>Item Artist</h5>
        </div>
        <div className="ItemCardDetails">
          <p>Source</p>
          <p>Credit Line</p>
          <p>Category</p>
          <p>Medium</p>
          <p>Century</p>
        </div>
      </div>
    </div>
  );
}

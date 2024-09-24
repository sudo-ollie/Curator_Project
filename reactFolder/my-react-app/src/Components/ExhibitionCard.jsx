import "../Styling/publicExhibitions.css";

function ExhibitionCard({ exhibitionObject }) {
  console.log(
    exhibitionObject.ExhibitionID,
    ":",
    Object.keys(exhibitionObject)
  );

  return (
    <div className="exhibitionIndividual">
      <div className="exhibImageContainer">
        <img
          src={
            exhibitionObject.ExhibitionImage ||
            "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
          }
          alt={exhibitionObject.ExhibitionName || "Exhibition placeholder"}
        />
      </div>
      <div className="exhibContentContainer">
        <div className="titleContent">
          <h5>{exhibitionObject.ExhibitionName}</h5>
          <p>Curator : X</p>
        </div>
        <p>ID : {exhibitionObject.ExhibitionID}</p>
        <p>Exhibit Length : {exhibitionObject.ExhibitionLength}</p>
      </div>
      <div className="footerDiv">
        <button type="button" className="btn btn-secondary explore-btn">
          Explore Exhibition
        </button>
        {/* <p>Exhibition : {exhibitionObject.ExhibitionID}</p> */}
      </div>
    </div>
  );
}

export default ExhibitionCard;

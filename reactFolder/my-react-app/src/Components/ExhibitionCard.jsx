import "../Styling/publicExhibitions.css"

function ExhibitionCard({exhibitionObject}) {

  return (
    <div key={exhibitionObject.ExhibitionID} className="exhibitionIndividual">
    <div className="exhibImageContainer">
      <img
        src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
        alt="img_placeholder"
      />
    </div>
    <div className="exhibContentContainer">
      <h5>{exhibitionObject.ExhibitionName}</h5>
      <p>ID: {exhibitionObject.ExhibitionID}</p>
      <p>Exhibit Length : {exhibitionObject.ExhibitionLength}</p>
      <button 
      id="submitSearch"
      type="button" 
      className="btn btn-secondary" 
    >
      Explore
    </button>
    </div>
  </div>
  )
}

export default ExhibitionCard
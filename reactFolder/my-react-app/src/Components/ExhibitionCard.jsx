import { useNavigate } from 'react-router-dom';

const ExhibitionCard = ({ exhibitionObject }) => {
  const navigate = useNavigate();

  return (
    <div className="exhibition-card">
      <img
        src={exhibitionObject.ExhibitionImage || "/api/placeholder/500/500"}
        alt={exhibitionObject.ExhibitionName || "Exhibition placeholder"}
        className="exhibition-image"
      />
      <div className="exhibition-body">
        <div className="title-section">
          <h5 className="exhibition-title">{exhibitionObject.ExhibitionName}</h5>
        </div>
        <hr className="dashed-line" />
        <div className="info-section">
          <p>Exhibition ID: {exhibitionObject.ExhibitionID}</p>
          <p>|</p>
          <p>Exhibition Length: {exhibitionObject.ExhibitionLength}</p>
        </div>
        <hr className="dashed-line" />
        <button 
          className="explore-button"
          onClick={() => navigate(`/Exhibition/${exhibitionObject.ExhibitionID}`)}
        >
          Explore Exhibition
        </button>
      </div>
    </div>
  );
};

export default ExhibitionCard;
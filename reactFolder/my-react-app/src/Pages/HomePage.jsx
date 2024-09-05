import "../Styling/homepage_styling.css";
import TopBar from "../Components/TopBar";
import SearchResultWrapper from "../Scripts/ResultsWrapper";

function HomePage() {
  return (
    <div id="ContentContainer">
      <TopBar />
      <div className="MainContent">
        <div className="MainContentLeft">
          <div className="LeftContentInner">
            <SearchResultWrapper />
          </div>
        </div>
        <div className="MainContentRight">
          <div className="RightContentTop">
            <div className="TopRightInner"></div>
          </div>
          <div className="RightContentBottom">
            <div className="BottomRightInner">
              <p>Public Exhibitions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
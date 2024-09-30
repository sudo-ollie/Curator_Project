import "../Styling/exploreExhib.css";
import TopBar from "../Components/TopBar";
// import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import ExploreExhibPub from "../Components/ExploreExhibPub";

function ExploreExhibitionsPage() {
  // const { isSignedIn, user } = useUser();
  return (
    <div id="ContentContainer">
      <TopBar />
      <div className="MainContent">
        <div className="MainContentInner">
          <div className="titleDiv">
            <h4>Explore Public Exhibitions</h4>
          </div>
          <div className="contentDiv">
          <ExploreExhibPub />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreExhibitionsPage;

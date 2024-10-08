import { SignedIn, UserButton } from "@clerk/clerk-react";
import "../Styling/TopBarStyling.css";

function TopBar() {
  return (
    <div className="TopBar">
      <div className="TopBarInner">
          <div className="TopBarLinks">
            <span className="TopBarText prevent-select">&lt;</span>
            <a href="/" className="TopBarText">Home</a>
            <span className="TopBarText prevent-select">|</span>
            <a href="/ExploreExhibitions" className="TopBarText">Explore Exhibitions</a>
            <span className="TopBarText prevent-select">|</span>
            <a href="/MyExhibitions" className="TopBarText">My Exhibitions</a>
            <span className="TopBarText prevent-select">&gt;</span>
          </div>
          <SignedIn>
            <div className="UserButtonWrapper">
              <UserButton />
            </div>
          </SignedIn>
      </div>
    </div>
  );
}

export default TopBar;
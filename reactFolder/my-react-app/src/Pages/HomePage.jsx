import "../Styling/homepage_styling.css";
import TopBar from "../Components/TopBar";
import SearchResultWrapper from "../Components/ResultsWrapper";
import PublicExhibitions from "../Components/PublicExhibitions";
import UserExhibs_SI from "../Components/UserExhibs_SI";
import UserExhibs_SO from "../Components/UserExhibs_SO";
import { useState, useCallback } from "react";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";

function HomePage() {
  const { isSignedIn, user } = useUser();
  const [refreshTrigger, setRefreshTrigger] = useState(Date.now());

  const handleExhibitionCreated = useCallback(() => {
    setRefreshTrigger(Date.now());
  }, []);

  return (
    <div id="ContentContainer">
      <TopBar />
      <div className="MainContent">
        <div className="MainContentLeft">
          <SearchResultWrapper onExhibitionCreated={handleExhibitionCreated} />
        </div>
        <div className="MainContentRight">
          <div className="RightContentTop">
            <SignedIn>
              {isSignedIn ? (
                <UserExhibs_SI
                  user={user}
                  isSignedIn={isSignedIn}
                  refreshTrigger={refreshTrigger}
                />
              ) : (
                <p>User should be signed in, but isSignedIn is false</p>
              )}
            </SignedIn>
            <SignedOut>
              <UserExhibs_SO />
            </SignedOut>
          </div>
          <div className="RightContentBottom">
            <PublicExhibitions refreshTrigger={refreshTrigger} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

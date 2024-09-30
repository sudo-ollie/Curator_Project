import "../Styling/homepage_styling.css";
import TopBar from "../Components/TopBar";
import SearchResultWrapper from "../Components/ResultsWrapper";
import PublicExhibitions from "../Components/PublicExhibitions";
import UserExhibs_SI from "../Components/UserExhibs_SI";
import UserExhibs_SO from "../Components/UserExhibs_SO";
import {
  SignedIn,
  SignedOut,
  useUser
} from "@clerk/clerk-react";


function HomePage() {
  const { isSignedIn, user } = useUser();
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
            <SignedIn>
                {isSignedIn ? (
                  <UserExhibs_SI user={user} isSignedIn={isSignedIn} />
                ) : (
                  <p>User should be signed in, but isSignedIn is false</p>
                )}
              </SignedIn>
              <SignedOut>
                <UserExhibs_SO/>
              </SignedOut>
          </div>
          <div className="RightContentBottom">
            <div className="BottomRightInner" style={{padding: "6px"}}>
              <PublicExhibitions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

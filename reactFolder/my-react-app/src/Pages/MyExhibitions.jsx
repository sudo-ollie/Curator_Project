import "../Styling/exploreExhib.css";
import TopBar from "../Components/TopBar";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import ExploreUserExhibitions from "../Components/ExploreUserExhibs";

function UserExhibPage() {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div id="ContentContainer">
      <TopBar />
      <div className="MainContent">
        <div className="MainContentInner">
          <SignedIn>
            <div className="titleDiv">
              <h4>Your Private Exhibitions</h4>
            </div>
            <div className="contentDiv">
              {user ? (
                <ExploreUserExhibitions userID={user.id} />
              ) : (
                <div>Error: Unable to load user data</div>
              )}
            </div>
          </SignedIn>
          <SignedOut>
            <div className="titleDiv">
              <h4>Your Private Exhibitions</h4>
            </div>
            <div className="contentDiv">
              <p>Log In</p>
            </div>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default UserExhibPage;
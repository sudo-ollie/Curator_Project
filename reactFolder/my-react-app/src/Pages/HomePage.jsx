import "../Styling/homepage_styling.css";
import TopBar from "../Components/TopBar";
import SearchResultWrapper from "../Scripts/ResultsWrapper";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
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
            <div className="TopRightInner">
            <SignedIn>
                {isSignedIn ? (
                  <>
                    <p>User is signed in. UserButton should appear below:</p>
                    <p>{user.id}</p>
                    <UserButton />
                  </>
                ) : (
                  <p>User should be signed in, but isSignedIn is false</p>
                )}
              </SignedIn>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </div>
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

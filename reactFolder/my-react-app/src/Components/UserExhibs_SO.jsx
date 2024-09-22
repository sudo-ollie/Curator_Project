import { SignInButton } from "@clerk/clerk-react";
import "../Styling/UserExhibsSO.css"

export default function UserExhibs_SO() {
  return (
    <div className="TopRightInner">
      <div className="topContainer">
        <div className="contentContainer">
          <h5>Unlock Your Curated Collections</h5>
        </div>
        <div className="buttonContainer">
          <SignInButton />
        </div>
      </div>
      <div className="bottomContainer">
        <p>
            Example filler content, explain that saving exhibitions is locked behind signin
        </p>
      </div>
    </div>
  );
}

import "../Styling/homepage_styling.css";
import TopBar from "../Components/TopBar";
import {
  SignedIn,
  SignedOut,
  useUser
} from "@clerk/clerk-react";


function ExploreExhibitionsPage() {
  const { isSignedIn, user } = useUser();
  return (
    <div id="ContentContainer">
      <TopBar />
      <div className="MainContent">

      </div>
    </div>
  );
}

export default ExploreExhibitionsPage;

import "../Styling/homepage_styling.css";
import TopBar from "../Components/TopBar";
import {
  SignedIn,
  SignedOut,
  SignIn,
  useUser
} from "@clerk/clerk-react";


function MyExhibitionsPage() {
  const { isSignedIn, user } = useUser();
  return (
    <div id="ContentContainer">
      <TopBar />
      <div className="MainContent">

      </div>
    </div>
  );
}

export default MyExhibitionsPage;

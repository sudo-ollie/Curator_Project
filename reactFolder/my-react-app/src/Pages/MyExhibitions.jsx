import { useUser, SignInButton } from "@clerk/clerk-react";
import ExploreUserExhibitions from "../Components/ExploreUserExhibs";
import TopBar from "../Components/TopBar";

function UserExhibPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "rgba(247, 231, 220, 0.8)",
        }}
      >
        <div
          className="spinner-border"
          role="status"
          style={{ marginBottom: "1rem" }}
        ></div>
        <h5>Loading...</h5>
      </div>
    );
  }

  if (isSignedIn) {
    console.log("User is signed in");
    return <ExploreUserExhibitions userID={user.id} />;
  } else {
    console.log("User is signed out");
    return (
      <div id="ContentContainer">
        <TopBar />
        <div className="MainContent" style={{ height: "calc(100vh - 60px)" }}>
          <div className="MainContentInner" style={{ 
            display: "flex", 
            flexDirection: "column", 
            height: "100%" 
          }}>
            <div className="titleDiv" style={{ height: "7%" }}>
              <h4>Sign In To View Content</h4>
            </div>
            <div className="signInButtonWrapper" style={{ 
              display: "flex", 
              flexDirection: "column",
              justifyContent: "center", 
              alignItems: "center",
              width: "100%", 
              height: "93%"
            }}>
              <SignInButton 
                mode="modal"
                style={{
                  width: "200px",
                  height: "60px",
                  fontSize: "40px",
                  backgroundColor: "#405d72",
                  color: "#f7e7dc",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserExhibPage;
import React from 'react';
import { useUser, SignInButton } from "@clerk/clerk-react";
import ExploreUserExhibitions from "../Components/ExploreUserExhibs";
import TopBar from "../Components/TopBar";

function UserExhibPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  const buttonStyle = {
    width: '100px',
    height: '50px',
    backgroundColor: 'X',
    color: 'Y',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, color 0.3s',
    marginTop: "20%"
  };

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
        <div className="MainContentInnerExplore">
          <div className="titleContainerExplore">
            <h4>Sign in to view your exhibitions</h4>
            <h6>Sign in below</h6>
          </div>
          <div className="exhibitionResultsExplore">
            <SignInButton mode="modal">
              <button style={buttonStyle}>
                Sign In
              </button>
            </SignInButton>
          </div>
        </div>
      </div>
    );
  }
}

export default UserExhibPage;
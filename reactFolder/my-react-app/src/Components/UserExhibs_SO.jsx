import { SignInButton } from "@clerk/clerk-react";
import "../Styling/YourExhibitionStyling.css";

export default function UserExhibs_SO() {
  return (
    <div 
      className="TopRightInner" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: "100%"
      }}
    >
      <div className="titleContainer">
        <h4>Your Exhibitions</h4>
        <h6>Sign in to view and create exhibitions</h6>
      </div>
      <div 
        className="exhibitionResults" 
        style={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: "100%"
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            textAlign: 'center',
            width: "100%"
          }}
        >
          <h5 style={{ color: "#405D72", width: "100%" }}>
            Unlock the ability to create and manage your own exhibitions. 
            Sign in to start curating your personal collections.
          </h5>
          <SignInButton 
            mode="modal"
            style={{
              width: "200px",
              height: "40px",
              fontSize: "16px",
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
  );
}
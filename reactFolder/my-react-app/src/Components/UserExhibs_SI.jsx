import UserExhibitons from "./UserExhibitions";

export default function UserExhibs_SI({ user, isSignedIn, refreshTrigger }) {
  let signedIn = isSignedIn;

  return (
    <>
      {signedIn ? (
          <UserExhibitons 
            userID={user.id} 
            userName={user.fullName}
            refreshTrigger={refreshTrigger} 
          />
      ) : (
        <div className="TopRightInner">
          <p>Sign-In Error, Retry</p>
        </div>
      )}
    </>
  );
}

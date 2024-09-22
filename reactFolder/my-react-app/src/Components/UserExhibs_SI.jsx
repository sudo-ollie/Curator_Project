import UserExhibitons from "./UserExhibitions";

export default function UserExhibs_SI({ user, isSignedIn }) {
  let signedIn = isSignedIn;

  console.log("Is Signed In : " , signedIn);

  return (
    <>
      {signedIn ? (
        <div className="TopRightInner">
          <UserExhibitons userID={user.id} userName={user.fullName} />
        </div>
      ) : (
        <div className="TopRightInner">
          <p>Sign-In Error, Retry</p>
        </div>
      )}
    </>
  );
}

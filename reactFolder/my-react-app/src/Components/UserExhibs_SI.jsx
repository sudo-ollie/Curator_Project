import UserExhibitons from "./UserExhibitions";

export default function UserExhibs_SI({ user, isSignedIn }) {
  let signedIn = isSignedIn;

  return (
    <>
      {signedIn ? (
          <UserExhibitons userID={user.id} userName={user.fullName} />
      ) : (
        <div className="TopRightInner">
          <p>Sign-In Error, Retry</p>
        </div>
      )}
    </>
  );
}

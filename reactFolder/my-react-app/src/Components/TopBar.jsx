import {
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";


function TopBar() {
  return (
    <div className="TopBar">
      <div className="TopBarInner">
        {
          SignedIn ?
          (
            <>
            <button>Page1</button>
            <button>Page2</button>
            <UserButton />
            </>
          )
          :
          (
            <>
            <button>Page1</button>
            <button>Page2</button>
            <p>User Not Signed In</p>
            </>
          )
        }
      </div>
    </div>
  );
}

export default TopBar;

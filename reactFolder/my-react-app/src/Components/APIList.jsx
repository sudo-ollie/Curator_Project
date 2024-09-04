import "../Styling/api_list_styling.css";
import APIListItem from "./APIList_Item";

function APIList({ supportedAPIs }) {

  return (
    <div className="SupportedAPIList">
        <h3>Supported APIs</h3>
      {supportedAPIs.map((element) => {
        {
            return (
                <APIListItem listitemcontent={element}/>
            )
        }
      })}
    </div>
  );
}

export default APIList;

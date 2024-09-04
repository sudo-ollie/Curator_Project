import "../Styling/api_list_item_styling.css";

function APIListItem({ listitemcontent }) {
  return (
    <div className="APIListItem">
      {console.log(listitemcontent)}
      <div className="ListLogoContainer">
            <img src={listitemcontent.API_Logo} alt="" />
            <h2>{listitemcontent.API_Name}</h2>
      </div>
      <div className="ListBtnContainer">
        <ul>
          <li>{listitemcontent.Web_Link}</li>
          <li>{listitemcontent.API_Docs}</li>
        </ul>
      </div>
    </div>
  );
}

export default APIListItem;

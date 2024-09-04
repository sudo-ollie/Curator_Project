import "../Styling/homepage_styling.css";
import APIList from "../Components/APIList";
import supportedAPIs from "../Scripts/supportedAPIs.json";
import TopBar from "../Components/ TopBar";

function HomePage() {
  return (
    <div id="ContentContainer">
      <TopBar />
      <div className="MainContent">
        <div className="MainContentLeft">
          <div className="LeftContentInner">
            <p>Your Exhibitions</p>
          </div>
        </div>
        <div className="MainContentRight">
          <div className="RightContentTop">
            <div className="TopRightInner">
              <div className="SupportedAPIInfo">
                <div className="SupportedAPIsTitle">
                  <p>Supported APIs</p>
                </div>
                <div className="SupportedAPIsContent">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    vitae libero a voluptas suscipit, porro provident quidem
                    rerum sunt consequatur, itaque voluptatum dolorem vel
                    temporibus perspiciatis nemo quas, dolores esse. Dolor illum
                    dicta voluptatibus aliquam rerum expedita, sunt culpa!
                    Tempore, velit provident. Voluptatum aliquam debitis
                    facilis, sapiente accusamus enim veritatis fugiat quod
                    perspiciatis. Repudiandae nesciunt iste ipsa sint maxime
                    provident. Rem explicabo ex quisquam, animi molestias
                    reiciendis perspiciatis impedit incidunt nulla quam dolorum,
                    tenetur consectetur provident accusantium asperiores
                    reprehenderit sunt a voluptatem nam quod. Illum nobis veniam
                    sed corrupti id. Pariatur consequatur autem, expedita vero
                    reprehenderit dolor quidem labore harum deleniti ut nihil
                    provident at nemo vel tenetur dolorum placeat? Illo, quas
                    omnis animi rem magnam delectus quae adipisci deserunt?
                    Deserunt quaerat rem suscipit obcaecati eligendi ipsam ullam
                    velit porro repellat ex officiis assumenda beatae qui a,
                    voluptates et aliquam accusantium debitis sed. Omnis, sunt.
                    Dolorem facere perspiciatis nam dolor!
                  </p>
                </div>
              </div>
                <APIList supportedAPIs={supportedAPIs}/>
            </div>
          </div>
          <div className="RightContentBottom">
            <div className="BottomRightInner">
              <p>Public Exhibitions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

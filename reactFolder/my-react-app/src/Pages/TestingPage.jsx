import TopBar from "../Components/TopBar";
import ItemCard from "../Components/ItemCard";
import "../Styling/exploreExhib.css";

function TestingPage() {
  let element = {
    CreditLine: "Harvard Art Museums/Fogg Museum, Gift of Mrs. Francis Ormond",
    ArticleDivision: "European and American Art",
    ArticleId: 197958,
    ArticleClassification: "Drawings",
    ImageUrl: "https://nrs.harvard.edu/urn-3:HUAM:77172_dynmc",
    ArtistName: "John Singer Sargent",
    Technique: "Graphite on darkened off-white wove paper",
    Title:
      "Partial Mountain Landscape, Zell am See, Austria; verso: Mountain Landscape",
    Date: "1871 - 1872",
    ItemURL: "https://www.harvardartmuseums.org/collections/object/197958",
    Century: "19th century",
    ArtistNationality: "American",
  };
  let index = 0;
  return (
    <div id="ContentContainer">
      <TopBar />
      <div className="MainContent">
        <ItemCard element={element} index={index} />
      </div>
    </div>
  );
}

export default TestingPage;

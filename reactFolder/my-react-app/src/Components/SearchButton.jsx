import { useContext } from "react";
import axios from "axios";
import { SearchContext } from "./ResultsWrapper";

export default function SearchButton({ validSearch }) {
  const { setApiResponse, setIsLoading, searchTerm } = useContext(SearchContext);

  async function handleSearch() {
    if (validSearch) {
      try {
        console.log("Req Sent");
        setIsLoading(true);
        const response = await axios.get(`https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/Development/test_item`);
        setApiResponse(response.data);
      } catch (error) {
        console.log(`ERROR : ${error.message}`);
        setApiResponse(null);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <button 
      id="submitSearch"
      type="button" 
      className="btn btn-secondary" 
      onClick={handleSearch}
      disabled={!validSearch}
    >
      Search
    </button>
  );
}
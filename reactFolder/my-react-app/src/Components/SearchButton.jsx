import { useContext } from "react";
import axios from "axios";
import { SearchContext } from "./ResultsWrapper";

export default function SearchButton({ validSearch , reqBody }) {
  const { setApiResponse, setIsLoading, searchTerm } = useContext(SearchContext);

  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 60000
  };

  async function handleSearch() {
    if (validSearch) {
      try {
        setIsLoading(true);
        const response = await axios.post('https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/itemSearch', reqBody, config);
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
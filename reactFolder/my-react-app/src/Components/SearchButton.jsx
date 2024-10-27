import { useContext } from "react";
import axios from "axios";
import { SearchContext } from "./ResultsWrapper";

export default function SearchButton({ validSearch , reqBody }) {
  const { setApiResponse, setIsLoading } = useContext(SearchContext);

  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 180000
  };

  async function handleSearch() {
    if (validSearch) {
      try {
        setIsLoading(true);
        const response = await axios.post('https://5nhtviapkusw7lmif3rmthlreu0ljqca.lambda-url.eu-west-2.on.aws/', reqBody, config);
        setApiResponse(response.data);
        localStorage.setItem('likedItems', JSON.stringify([]));
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
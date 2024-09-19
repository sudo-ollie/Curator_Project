import { useEffect, useState } from 'react';


function PublicExhibitions() {

    const [publicExhibitions, setPublicExhibitions] = useState(null);

    useEffect(() => {
        // This function will run after the component mounts
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.example.com/data');
            const result = await response.json();
            setPublicExhibitions(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [])

  return (
    <div>

    </div>
  )
}

export default PublicExhibitions
import { useEffect, useState } from "react";

function UserExhibitions({ userID }) {
  const [userExhibitions, setUserExhibitions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(
          `https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/userExhibitions?userID=${userID}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result)
        setUserExhibitions(result.exhibitions);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An Error Occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userID]);

  if (isLoading) return <div>Loading exhibitions...</div>;
  if (!userExhibitions) return <div>No exhibition data available</div>;

  return (
    <div>
      <h4>User Exhibitions</h4>
      {error !== null ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          {userExhibitions.length === 0 ? (
            <p>No exhibitions found for this user.</p>
          ) : (
            <>
              <p>{userExhibitions.length} exhibition(s) found</p>
              <ul>
                {userExhibitions.map((exhibition) => (
                  <li key={exhibition.ExhibitionID}>
                    <h5>{exhibition.ExhibitionName}</h5>
                    <p>ID: {exhibition.ExhibitionID}</p>
                    <p>Length: {exhibition.ExhibitionLength}</p>
                    <p>Public: {exhibition.ExhibitionPublic ? 'Yes' : 'No'}</p>
                    <p>User ID: {exhibition.UserID}</p>
                    <h6>Exhibit Content:</h6>
                    <ul>
                      {exhibition.ExhibitContent.map((content) => (
                        <li key={`${exhibition.ExhibitionID}`}>
                          {/* Render content properties here */}
                          {JSON.stringify(content)}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default UserExhibitions;
import { useEffect, useState } from "react";

export function useMovieSummary() {
  const [selectedID, setSelectedID] = useState(null);
  const [movieSummary, setMovieSummary] = useState({});
  const fetchMovieSummary = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${selectedID}&apikey=5f35c61b`
      );
      const result = await response.json();
      setMovieSummary(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedID === null) return;
    fetchMovieSummary();
  }, [selectedID]);

  return { selectedID, setSelectedID, movieSummary };
}

import { useState, useEffect } from "react";

export function useMovies(query) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=${query}&apikey=5f35c61b`
        );
        const result = await response.json();
        setData(result.Search);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);

  return [data];
}

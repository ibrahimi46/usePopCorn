// api/movies.js
export default async function handler(req, res) {
  const { query } = req.query;
  const apiKey = process.env.MOVIE_API_KEY;

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}

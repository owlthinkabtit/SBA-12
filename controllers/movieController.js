import axios from 'axios';

export const searchMovies = async (req, res) => {
  try {
    const title = req.query.title;

    if (!title) {
      return res.status(400).json({ error: "Title query parameters is required " });
    }

    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: {
        s: title, 
        apikey: process.env.OMDB_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error("Search Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params
    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: {
        i: id, 
        apikey: process.env.OMDB_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error("Details Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
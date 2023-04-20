import axios from "axios"

// Fetch the paged result of top rated movies
export const fetchTopRated = async ({ page }) => {
  const res = await axios.get("https://api.themoviedb.org/3/movie/top_rated", {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      language: "en-US",
      page: page,
    },
  })

  return res.data
}

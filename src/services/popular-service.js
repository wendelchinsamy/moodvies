import axios from "axios"

// Fetch paged result of all popular movies
export const fetchPopular = async ({ page }) => {
  const res = await axios.get("https://api.themoviedb.org/3/movie/popular", {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      language: "en-US",
      page: page,
    },
  })

  return res.data
}

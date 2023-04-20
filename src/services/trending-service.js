import axios from "axios"

// Fetch the paged result of trending movies
export const fetchTrending = async ({ page }) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day`,
    {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        page: page,
      },
    }
  )

  return res.data
}

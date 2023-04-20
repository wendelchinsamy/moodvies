import axios from "axios"

// Fetch paged result of reviews for a movie
export const fetchReviews = async ({ movieId, page }) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: "en-US",
        page: page,
      },
    }
  )

  return res.data
}

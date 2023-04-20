import axios from "axios"

// Fetch paged result of movies searched by title
export const fetchMovies = async ({ query, page }) => {
  const res = await axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      language: "en-US",
      include_adult: false,
      query: query,
      page: page,
    },
  })

  return res.data
}

// Fetch movie with provided movie id
export const fetchTitle = async ({ id }) => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      language: "en-US",
    },
  })

  return res.data?.title
}

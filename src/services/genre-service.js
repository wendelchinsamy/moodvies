import axios from "axios"

// Fetch all movie genres
export const fetchGenres = async () => {
  const res = await axios.get("https://api.themoviedb.org/3/genre/movie/list", {
    params: { api_key: import.meta.env.VITE_API_KEY },
  })

  return res.data.genres
}

// Generate comma delimited string of genre names for a give id array
export const getNamesFromIds = (ids, genres) => {
  const names = []

  // If we do not have any ids we'll return the empty array
  if (!ids) return names

  // Populate the name array for the given ids
  ids.map((id) => {
    const genre = genres.find((genre) => genre.id === id)

    if (genre) names.push(genre.name)
  })

  // Return and generate the comma delimited string
  return names.join(", ")
}

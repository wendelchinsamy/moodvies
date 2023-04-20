import noImage from "../components/search-list/no-image.png"

// Generate the absolute image poster path
export const getPosterPath = (path) => {
  // If the provided path is falsey, return the no image pn
  if (!path) return noImage

  // Otherwise build up and return the absolute image path
  return `${import.meta.env.VITE_POSTER_PATH_PREFIX}/${path}`
}

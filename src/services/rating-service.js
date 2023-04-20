// Generate the rating percentage string
export const getRatingText = (rating) => {
  // Not too concerned with the accuracy and thus the use of the floor function
  return `${Math.floor(rating * 10)}%`
}

// Generate the rating font colour style
export const getRatingStyles = (rating) => {
  const prefix = "info rating"
  let style = "high"

  if (rating < 5) style = "low"

  if (rating < 7) style = "mid"

  return `${prefix} ${style}`
}

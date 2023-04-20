import { useState, useEffect } from "react"
import Banner from "../components/banner/Banner"
import { fetchReviews } from "../services/reviews-service"
import Pager from "../components/search-list/Pager"
import "../components/search-list/SearchList.css"
import { Row, Col } from "react-bootstrap"
import { useParams, useNavigate } from "react-router-dom"
import Star from "../components/star/Star"
import { fetchTitle } from "../services/movie-service"

function Reviews() {
  const navigate = useNavigate()

  // Fetch the movie id from the url
  const { id } = useParams()

  // Movie title will be used as the banner subtitle
  const [title, setTitle] = useState("")

  // Review data
  const [data, setData] = useState({
    page: 0,
    total_pages: 0,
    results: [],
  })

  // Load the reviews and movie title on first render
  useEffect(() => {
    ;(async () => {
      try {
        setData(await fetchReviews({ page: 1, movieId: id }))
        setTitle(await fetchTitle({ id: id }))
      } catch (err) {
        navigate("/internal-server-error")
      }
    })()
  }, [])

  // Scroll to the top of the page each time a user clicks on the pager
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [data])

  // Click handler for loading the next result page
  const getNext = async () => {
    try {
      setData(await fetchReviews({ page: data.page + 1, movieId: id }))
    } catch (err) {
      navigate("/internal-server-error")
    }
  }

  // Click handler for loading the previous page
  const getPrevious = async () => {
    try {
      setData(await fetchReviews({ page: data.page - 1, movieId: movieId }))
    } catch (err) {
      navigate("/internal-server-error")
    }
  }

  return (
    <>
      <Banner title={"Reviews"} subtitle={title} />
      {data.results.length === 0 && (
        <div className="empty-results">
          <h1>No reviews found</h1>
        </div>
      )}

      {data.results.map((review, index) => {
        return (
          <Row key={index} className="app-search-list-item my-15">
            <Col>
              <div className="info-label">Author</div>
              <div className="info">{review.author}</div>
              <div className="info-label">Date</div>
              <div className="info">{review.created_at}</div>
              <div className="info-label">Rating</div>
              <div className="info">
                {!review.author_details.rating && "N/A"}
                {review.author_details.rating &&
                  [...Array(Math.floor(review.author_details.rating))].map(
                    (star, index) => <Star key={index} />
                  )}
              </div>
              <div className="info review">{review.content}</div>
            </Col>
          </Row>
        )
      })}
      <Pager
        page={data.page}
        totalPages={data.total_pages}
        getNext={getNext}
        getPrevious={getPrevious}
      />
    </>
  )
}

export default Reviews

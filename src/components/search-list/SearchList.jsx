import { Col, Row } from "react-bootstrap"
import { getPosterPath } from "../../services/image-service"
import { getRatingStyles, getRatingText } from "../../services/rating-service"
import ISO6391 from "iso-639-1"
import "./SearchList.css"
import { getNamesFromIds } from "../../services/genre-service"
import ActionButtons from "./ActionButtons"

function SearchList(props) {
  return (
    <>
      {props.results.length === 0 && (
        <div className="empty-results">
          <h1>No search results</h1>
        </div>
      )}

      {props.results.map((movie, index) => {
        return (
          <Row key={index} className="app-search-list-item my-15">
            <Col lg={3} md={4} sm={5} xs={6}>
              <img
                src={getPosterPath(movie.poster_path)}
                className="img-fluid"
              />
              <ActionButtons movieId={movie.id} />
            </Col>
            <Col lg={9} md={8} sm={7} xs={6}>
              <div className="title info">{movie.title}</div>
              <div className="info-label">Overview</div>
              <div className="info">{movie.overview}</div>
              <div className="info-label">Genres</div>
              <div className="info">
                {getNamesFromIds(movie.genre_ids, props.genres)}
              </div>
              <div className="info-label">Language</div>
              <div className="info">
                {ISO6391.getName(movie.original_language)}
              </div>
              <div className="info-label">Release date</div>
              <div className="info">{movie.release_date}</div>
              <div className="info-label">Rating</div>
              <div className={getRatingStyles(movie.vote_average)}>
                {getRatingText(movie.vote_average)}
              </div>
            </Col>
          </Row>
        )
      })}
    </>
  )
}

export default SearchList

import { Col, Row } from "react-bootstrap"

function NotFound(props) {
  return (
    <Row>
      <Col>
        <div className="not-found text-center">
          <h1 className="not-found-title">404</h1>
          <p className="not-found-text">
            Oops! Seems the resource you're looking for could not be found.
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default NotFound

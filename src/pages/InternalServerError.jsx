import { Col, Row } from "react-bootstrap"

function InternalServerError() {
  return (
    <Row>
      <Col>
        <div className="not-found text-center">
          <h1 className="not-found-title">500</h1>
          <p className="not-found-text">
            Oops! Something has gone horribly wrong. Please try again.
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default InternalServerError

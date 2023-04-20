import { Container, Row, Col } from "react-bootstrap"
import tmdb from "./tmdb.svg"
import "./Footer.css"

function Footer() {
  return (
    <footer className="app-footer text-center fixed-bottom">
      <Container>
        <Row>
          <Col>
            <a href="https://www.themoviedb.org/">
              <span className="text">Data provided by</span>
              <img className="logo" src={tmdb} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

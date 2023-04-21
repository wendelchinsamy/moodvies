import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <Navbar expand="md" className="app-navbar">
      <Container>
        <Navbar.Brand as={Link} to={"/"} className="brand">
          MOODVIES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/top-rated"}>
              Top Rated
            </Nav.Link>
            <Nav.Link as={Link} to={"/trending"}>
              Trending
            </Nav.Link>
            <Nav.Link as={Link} to={"/popular"}>
              Popular
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

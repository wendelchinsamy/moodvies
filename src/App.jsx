import { Container } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Popular from "./pages/Popular"
import Trending from "./pages/Trending"
import Search from "./pages/Search"
import { fetchGenres } from "./services/genre-service"
import { useState, useEffect } from "react"
import TopRated from "./pages/TopRated"
import Reviews from "./pages/Reviews"
import NotFound from "./pages/NotFound"
import InternalServerError from "./pages/InternalServerError"

function App() {
  // Will store the genres for movies
  const [genres, setGenres] = useState([])

  // Fetch the movie genres once when the app loads and use prop drilling to provide
  // the genres to the components that require it
  useEffect(() => {
    ;(async () => {
      setGenres(await fetchGenres())
    })()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <div className="app-wrapper">
          <Routes>
            <Route path="/" element={<Search genres={genres} />} />
            <Route path="/trending" element={<Trending genres={genres} />} />
            <Route path="/popular" element={<Popular genres={genres} />} />
            <Route path="/top-rated" element={<TopRated genres={genres} />} />
            <Route path="/movie/:id/reviews" element={<Reviews />} />
            <Route
              path="/internal-server-error"
              element={<InternalServerError />}
            />
            <Route path="*" element={<NotFound />} status={404} />
          </Routes>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default App

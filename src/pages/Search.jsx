import { fetchMovies } from "../services/movie-service"
import { useState, useEffect } from "react"
import Banner from "../components/banner/Banner"
import SearchList from "../components/search-list/SearchList"
import { InputGroup, FormControl, Button, Form } from "react-bootstrap"
import Pager from "../components/search-list/Pager"
import { useNavigate } from "react-router-dom"

function Search(props) {
  const navigate = useNavigate()

  // Search query used to filter our results
  const [query, setQuery] = useState("")

  // Movie data
  const [data, setData] = useState({
    page: 0,
    total_pages: 0,
    results: [],
  })

  // Scroll to the top of the page each time a user clicks on the pager
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [data])

  // Form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setData(
        await fetchMovies({
          query: query,
          page: 1,
        })
      )
    } catch (err) {
      navigate("/internal-server-error")
    }
  }

  // Click handler for loading the next result page
  const getNext = async () => {
    try {
      setData(
        await fetchMovies({
          query: query,
          page: data.page + 1,
        })
      )
    } catch (err) {
      navigate("/internal-server-error")
    }
  }

  // Click handler for loading the previous page
  const getPrevious = async () => {
    try {
      setData(
        await fetchMovies({
          query: query,
          page: data.page - 1,
        })
      )
    } catch (err) {
      navigate("/internal-server-error")
    }
  }

  return (
    <>
      <Banner
        title={"Welcome"}
        subtitle="Start exploring our extensive movie database today!"
      />
      <div className="app-search">
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <FormControl
              type="text"
              size="lg"
              placeholder="Search for movies..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Button type="submit">Search</Button>
          </InputGroup>
        </Form>
      </div>
      <SearchList results={data.results} genres={props.genres} />
      <Pager
        page={data.page}
        totalPages={data.total_pages}
        getNext={getNext}
        getPrevious={getPrevious}
      />
    </>
  )
}

export default Search

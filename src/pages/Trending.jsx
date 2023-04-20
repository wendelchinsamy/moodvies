import { useState, useEffect } from "react"
import Banner from "../components/banner/Banner"
import { fetchTrending } from "../services/trending-service"
import SearchList from "../components/search-list/SearchList"
import Pager from "../components/search-list/Pager"
import { useNavigate } from "react-router-dom"

function Trending(props) {
  const navigate = useNavigate()

  // Trending movies
  const [data, setData] = useState({
    page: 0,
    total_pages: 0,
    results: [],
  })

  // Load trending movies on first render
  useEffect(() => {
    ;(async () => {
      try {
        setData(await fetchTrending({ page: 1 }))
      } catch (err) {
        navigate("/internal-server-error")
      }
    })()
  }, [])

  // Scroll to the top of the page each time a user clicks on the pager
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [data])

  // Click handler for loading the next page
  const getNext = async () => {
    try {
      setData(
        await fetchTrending({
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
        await fetchTrending({
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
        title={"Trending"}
        subtitle={"A glimpse of the hottest movies today!"}
      />
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

export default Trending

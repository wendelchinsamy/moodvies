import { useState, useEffect } from "react"
import Banner from "../components/banner/Banner"
import { fetchTopRated } from "../services/top-rated-service"
import SearchList from "../components/search-list/SearchList"
import Pager from "../components/search-list/Pager"
import { useNavigate } from "react-router-dom"

function TopRated(props) {
  const navigate = useNavigate()

  // Top rated movie data
  const [data, setData] = useState({
    page: 0,
    total_pages: 0,
    results: [],
  })

  // Load top rated movies on first render
  useEffect(() => {
    ;(async () => {
      try {
        setData(await fetchTopRated({ page: 1 }))
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
      setData(
        await fetchTopRated({
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
        await fetchTopRated({
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
        title={"Top Rated"}
        subtitle={"Movies that score big amongst movie lovers!"}
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

export default TopRated

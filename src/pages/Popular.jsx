import { useState, useEffect } from "react"
import Banner from "../components/banner/Banner"
import { fetchPopular } from "../services/popular-service"
import SearchList from "../components/search-list/SearchList"
import Pager from "../components/search-list/Pager"
import { useNavigate } from "react-router-dom"

function Popular(props) {
  const navigate = useNavigate()

  // Popular movie data
  const [data, setData] = useState({
    page: 0,
    total_pages: 0,
    results: [],
  })

  // Load the popular movies on first render
  useEffect(() => {
    ;(async () => {
      try {
        setData(await fetchPopular({ page: 1 }))
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
        await fetchPopular({
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
        await fetchPopular({
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
        title={"Popular"}
        subtitle={"Movies making waves amongst movie lovers!"}
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

export default Popular

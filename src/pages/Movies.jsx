// import { useLoaderData } from "react-router-dom"
import axios from "axios"
import Card from "../components/UI/Card"
import { useEffect, useState } from "react"

const Movies = () => {
  // const moviesData = useLoaderData()
  // console.log(moviesData)
  const [data, setData] = useState([])

  const API = "https://www.omdbapi.com/?apikey=bbd02d93&s=titanic&page=1"


  const getMovieData = async () => {
    try {
      const res = await axios.get(API)
      console.log(res.data.Search)
      setData(res.data.Search)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovieData();


  }, [])


  return (
    <>
      <ul className="max-w-screen-xl flex flex-wrap items-start justify-center py-12 gap-10 bg-black">
        {
          data &&
          data.map((curMovie) => {
            return <Card key={curMovie.imdbID} curMovie={curMovie} />
          }
          )
        }
      </ul>
    </>
  )
}

export default Movies
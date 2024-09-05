import { useLoaderData } from "react-router-dom"
import Card from "../components/UI/Card"

const Movies = () => {
  const moviesData = useLoaderData()
  console.log(moviesData)
  return (
    <>
      <ul className="max-w-screen-xl flex flex-wrap items-start justify-center py-12 gap-10">
        {
          moviesData &&
          moviesData.Search.map((curMovie) => {
            return <Card key={curMovie.imdbID} curMovie={curMovie} />
          }
          )
        }
      </ul>
    </>
  )
}

export default Movies
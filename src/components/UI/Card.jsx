import { NavLink } from "react-router-dom"

const Card = ({ curMovie }) => {
  const { Poster, imdbID, Year } = curMovie

  return (
    <>


      <li>
        <div className="hover:border-black hover:-translate-y-11 transition-all ease-in max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <NavLink to={`/movie/${imdbID}`}  >
            <img className="rounded-t-lg h-[50%]" src={Poster} alt={imdbID} />
          </NavLink>
          <div className="p-5">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{Year}</h5>

            <NavLink to={`/movie/${imdbID}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Watch Now
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </NavLink>
          </div>
        </div>
      </li>

    </>
  )
}

export default Card
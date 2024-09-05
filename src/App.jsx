import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Movie from './pages/Movies'
import Contact, { ContactData } from './pages/Contact'
import AppLayout from "./components/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import { GetApiData } from "./api/GetApiData";
import MovieDetail from "./components/UI/MovieDetail";
import { GetMovieDetails } from "./api/GetMovieDetails";

const App = () => {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/about',
            element: <About />

          },
          {
            path: '/movie',
            element: <Movie />,
            loader: GetApiData
          },
          {
            path: '/movie/:id',
            element: <MovieDetail />,
            loader: GetMovieDetails
          },
          {
            path: '/contact',
            element: <Contact />,
            action: ContactData
          }
        ]
      }
    ]
  )



  return <RouterProvider router={router} />
}

export default App;
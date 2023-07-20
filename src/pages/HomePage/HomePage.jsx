import { useState } from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { HomeLink, HomeItem } from "./HomePage.styled";
import { toast } from 'react-toastify';
import  toastConfig  from "notification/Toastify";
import { fetchTrendyMovies } from "services/fetchMovies";
import MoviesList from "components/MoviesList/MoviesList.jsx";
import Loading from "components/Loading/Loading";

const HomePage = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setIsLoading(true)
        const movies = await fetchTrendyMovies()
        setMovies(movies)
        if (!movies) {
          toast.info('Sorry! Information about movies is not found.', toastConfig);}
        // console.log('movies', movies)
      }
      catch(error){
       console.log(error.message)
       setError(error.message)
       toast.error(error.message, toastConfig)

      }
      finally{
        setIsLoading(false)
      }
    }
    fetchMovieData()
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      {error !== null && (
        <p>Oops, some error happened. Please, try again later. Error: {error} 
        </p>
      )}
      {isLoading && (<Loading/>)}
      {movies &&  <MoviesList movies={movies}/>}
    
    </div>
  )
}
export default HomePage
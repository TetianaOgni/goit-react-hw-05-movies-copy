import {useSearchParams} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import  toastConfig  from "notification/Toastify";
import {fetchMovies} from '../../services/fetchMovies';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import MoviesList from 'components/MoviesList/MoviesList'
import Loading from "components/Loading/Loading";
import {ErrorText} from "../HomePage/HomePage.styled"

const MoviesPage = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const [searchParams] = useSearchParams()
  const movieName = searchParams.get('query') ?? ''


  useEffect(() => {
   if (!movieName ) return

    const fetchMovieData = async () => {
      try {

        setIsLoading(true)

        const movies = await fetchMovies(movieName)
        setMovies(movies)

    if (movies.length === 0) {
          toast.warning('Sorry! The movies with such words are not found.', toastConfig);
      } 
    }
      catch(error){
       setError(error.message)
       toast.error(error.message, toastConfig)
      }
      finally{
        setIsLoading(false)

      }
    }
    fetchMovieData()

  }, [movieName]);

    return (
    <div>
       <SearchMovies/> 
       {error !== null && (
        <ErrorText>Oops, some error happened. Please, try again later. Error: {error} 
        </ErrorText>
      )}
      {isLoading && (<Loading/>)}
      {movies && (<MoviesList movies={movies}/>)}
    </div>
    )
}
export default MoviesPage


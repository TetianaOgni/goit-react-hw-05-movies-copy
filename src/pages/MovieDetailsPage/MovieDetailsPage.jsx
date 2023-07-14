import { useEffect, useState, useRef } from "react"
import { useLocation, useParams } from "react-router-dom"
import { Link, Outlet } from "react-router-dom"
import {fetchMoviesDetails } from '../../services/fetchMovies'
import {MagnifyingGlass} from 'react-loader-spinner'
import errorImg from  '../../components/Images/errorImg.jpg'
import {MovieContent, MovieInfo, ImageMovie, ImageMovieThumb } from "./MovieDetailsPage.styled"

const MovieDetailsPage = ()=>  {

   
    const [movieDetails, setMovieDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const location = useLocation()
    // console.log("location", location)
    const backLinkHref =  useRef(location.state?.from ?? '/')
    const {movieId} = useParams()
    // console.log(3, movieId)
    useEffect(()=>{
    //  тут запрос по movieId
    if (!movieId) {
      // console.log(movieId)
      return
    }
    const fetchMovieData = async () => {
    try {
      setIsLoading(true)
      const movieDetails = await fetchMoviesDetails(movieId)
      // console.log(4, movieDetails.title)
      setMovieDetails(movieDetails) 
    }
    catch(error){
     console.log(error.message)
     setError(error.message)
    }
    finally{
      setIsLoading(false)
    }
    }
    fetchMovieData()
    }, [movieId])
    // console.log(5, movieDetails.backdrop_path)
    console.log('error', error)
    const {backdrop_path, poster_path, title, overview} = movieDetails || {}
    // console.log(6, poster_path)
  return (
    // тут рендерим по полученному запросу разметку
    <div>
      
        <Link to={backLinkHref.current}>Go back</Link> 
        {error !== null  && (
        <p>
          Oops, some error happened. Please, try again later. Error: {error} 
        </p>
        )}
        {isLoading && (
          <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{
            borderRadius: "50%",
            boxShadow: '0px 0px 16px 6px rgba(0, 101, 255, 0.69) inset',
            WebkitBoxShadow: '0px 0px 16px 6px rgba(0, 101, 255, 0.69) inset',
            MozBoxShadow: '0px 0px 16px 6px rgba(0, 101, 255, 0.69) inset',
          }}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor = '#fff'
    
          color = 'rgb(46,46,46)'
          
   
        />
        )}

        {movieDetails !== null && 
        <MovieContent>
            
            {poster_path?
            <ImageMovieThumb>
              <ImageMovie src={`https://image.tmdb.org/t/p/w200${poster_path}`}  alt={title}/>
            </ImageMovieThumb>
            :
            <ImageMovieThumb>
            <ImageMovie src={errorImg} alt=""/> 
            </ImageMovieThumb>
            }
            <MovieInfo>
              <h2>{title}</h2>
              <p>{overview}</p>
            </MovieInfo>
            
        </MovieContent>
        }

        <ul>
            <li>
              <Link to='cast'>Cast</Link> 
            </li>
            <li>
              <Link to='reviews'>Reviews</Link> 
            </li>
        </ul>
        <Outlet/>
       <img src={backdrop_path} alt="" />
    </div>
  )
}

export default MovieDetailsPage

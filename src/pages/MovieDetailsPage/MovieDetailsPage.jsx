import { useEffect, useState, useRef } from "react"
import { useLocation, useParams } from "react-router-dom"
import { Link, Outlet } from "react-router-dom"
import {FaLongArrowAltLeft} from "react-icons/fa";
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
    const {backdrop_path, poster_path, title, release_date, overview, genres, vote_average} = movieDetails || {}
   let genres_list
    if (!genres) {
      genres_list = 'Genre is found'
    } else if (genres.length === 1) {
      genres_list = genres[0].name;
    }else{
      genres_list = genres.map((genre, index)=> {
        if (index !==0){
          genre.name = genre.name.toLowerCase()
        }
        return genre.name
      }).join(", ")
  }
    console.log(6, genres_list)
  return (
    <div>
      
        <Link to={backLinkHref.current}>
        <FaLongArrowAltLeft/>
          Go back
          </Link> 
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
              <h2>{title} ({release_date.slice(0, 4)})</h2>
              <p>User Score: {vote_average * 10}%</p> 
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres_list}</p>
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



  // {vote_average.toFixed(1)}/10
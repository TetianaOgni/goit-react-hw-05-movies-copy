// import {Link, useSearchParams, useLocation} from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import  toastConfig  from "notification/Toastify";
import {fetchMovies} from '../../services/fetchMovies';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import MoviesList from 'components/MoviesList/MoviesList'
import Loading from "components/Loading/Loading";

const MoviesPage = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const [searchParams] = useSearchParams()
  console.log("searchParams2", searchParams)

  const movieName = searchParams.get('query') ?? ''
  console.log("movieName", movieName)
  // const location = useLocation()


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
       console.log(error.message)
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
        <p>Oops, some error happened. Please, try again later. Error: {error} 
        </p>
      )}
      {isLoading && (<Loading/>)}
      {movies && (<MoviesList movies={movies}/>)}
    </div>
    )
}
export default MoviesPage






// onClick={()=>setSearchParams({})}

/* <div>
      <h2>Trending today</h2>
      <ul>
      {movies.map(({title, id, name}) => {
        return (
         
            <HomeItem key={id}>
              <HomeLink  to={`/movies/${id}`} >
                {title ? title : name}
              </HomeLink>
            </HomeItem>
    
        )
      })}
      </ul>
    </div> */



// return (
//     <div>
// <ul>
//   {images.map(({ id, original_title }) => (
//     <li key={id}>
//       <Link to={`${original_title}`}>
//         {original_title}
    
//       </Link>
//     </li>
//   ))}
// </ul>
// </div>
// )

// const [movies, setMovies] = useState([
//   'movie-1', 'movie-2','movie-3', 'movie-4', 'movie-5'
// ]
// )

/* <div><input type="text" />
Hi it is movies page
</div> */



  // useEffect(() => {
  //   setSearchParams({ movieName }); // Обновляем параметры строки запроса при изменении movieName
  // }, [movieName, setSearchParams]);
   
  //   useEffect(()=>{


  //    const fetchData = async()=> {
  //       try{ 
  //           const {data} = await fetchMovies(movieName)
  //           console.log(data.results)
  //           const array = data.results
  //           // setMovies([...movies, movieName])
  //          }
  //          catch(error) {
  //          console.log(error.message)

  //          }
  //    }
  //     fetchData()
  //   }, [movieName])

  // import { useEffect } from "react";
// import {fetchMovies} from "../../services/fetchMovies.js";

// const q = 'cat'
// const k = `/trending/movie/day?language=en-US&page=1`
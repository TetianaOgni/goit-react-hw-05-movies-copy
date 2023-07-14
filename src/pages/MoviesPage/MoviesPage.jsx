import {Link, useSearchParams, useLocation} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import {fetchMovies} from '../../services/fetchMovies'

const MoviesPage = () => {
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const movieName = searchParams.get('query')
  console.log("movieName", movieName)
  const location = useLocation()


  useEffect(() => {
   if (!movieName ) return

    const fetchMovieData = async () => {
      try {
        const movies = await fetchMovies(movieName)
      
        setMovies(movies)
        
        // console.log('movies', movies)
      }
      catch(error){
       console.log(error.message)
      
      }
    }
    fetchMovieData()
  }, [movieName]);




   const handleSearchParams = (event) => {
    event.preventDefault()
    const searchValue = event.target.children.search.value
    console.log("searchValue", searchValue)

    if (searchValue.trim().length > 2 ) {
      setSearchParams({query:  searchValue})
    }

    // setSearchParams({query: searchValue})

   }

    return (
    <div>
      <form onSubmit={handleSearchParams} >
        <input type="text"
        name = "search"
       placeholder="Enter movie"
        value={movieName}
        required
        minLength={2}
        /> 
       
        <button type='submit' >Search</button>
      </form>
      
      <ul>
        {movies.map(({title, id, name}) => (
             <li key={id}>
             <Link 
             state={{from: location}} 
             to={`/movies/${id}`} >
               {title ? title : name}
             </Link>
           </li>
        ))}
      </ul>
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
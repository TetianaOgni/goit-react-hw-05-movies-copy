import { useState } from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { HomeLink, HomeItem } from "./HomePage.styled";
import { fetchTrendyMovies } from "services/fetchMovies";
import MoviesList from "components/MoviesList/MoviesList.jsx";

const HomePage = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movies = await fetchTrendyMovies()
      
        setMovies(movies)
      
        // console.log('movies', movies)
      }
      catch(error){
       console.log(error.message)
      
      }
    }
    fetchMovieData()
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      <MoviesList movies={movies}/>
      {/* <ul>
      {movies.map(({title, id, name}) => {
        return (
            <HomeItem key={id}>
              <HomeLink  to={`/movies/${id}`} >
                {title ? title : name}
              </HomeLink>
            </HomeItem>
    
        )
      })}
      </ul> */}
    </div>
  )
}
export default HomePage
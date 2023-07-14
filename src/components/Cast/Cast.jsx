import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"
import {fetchMovieCast} from '../../services/fetchMovies'

const Cast = () => {
  const [cast, setCast] = useState([])

const { movieId } = useParams();

useEffect(() => {
if (!movieId) return;
const fetchMovieData = async () => {
try {
  const cast = await fetchMovieCast(movieId)

  setCast(cast)
  
  console.log(1,'cast', cast)
}
catch(error){
 console.log(error.message)

}
}
fetchMovieData()
}, [movieId]);


  return (
    <div>
      my Cast for {movieId}
      <ul>
        {cast.map(({ profile_path, name, id}) => (
             <li key={id}>
           <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name}/>
           <p>{name}</p>
           </li>
        ))}
      </ul>
    </div>
  )
}
export default Cast

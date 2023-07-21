import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"
import { toast } from 'react-toastify';
import  toastConfig  from "notification/Toastify";
import {fetchMovieCast} from '../../services/fetchMovies'
import Loading from "components/Loading/Loading";
import { CastList, CastItem, CastImage, CastText} from './Cast.styled'

const Cast = () => {
  const [cast, setCast] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

const { movieId } = useParams();

useEffect(() => {

if (!movieId) return;

const fetchMovieData = async () => {
try {
  setIsLoading(true)
  const cast = await fetchMovieCast(movieId)
  setCast(cast)
  if (cast.length === 0) {
  toast.info('Info is not found', toastConfig);}
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

}, [movieId]);

const fallbackImage = 'https://via.placeholder.com/200x260';

  return (
  
    <div>
      {error !== null && (
        <p style={{ color: "red" }}>
      Oops, some error happened. Please, try again later. Error: {error} 
        </p>
      )}
      {isLoading && (<Loading/>)}
      {cast &&
      (<CastList>
        {cast.map(({ profile_path, name, id}) => (
             <CastItem key={id}>
           <CastImage 
           src={`https://image.tmdb.org/t/p/w200${profile_path}`}
           alt={name}
           onError={(e) => {
            e.target.src = fallbackImage;
          }}
            />
           <CastText>{name}</CastText>
           </CastItem>
        ))}
      </CastList>)}
    </div>
  )
}
export default Cast

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {fetchMovieReview} from '../../services/fetchMovies'
import Loading from "components/Loading/Loading";
import { toast } from 'react-toastify';
import  toastConfig  from "notification/Toastify";

const Reviews = () => {

  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    const fetchMovieData = async () => {
    try {
      setIsLoading(true)
      const reviews = await fetchMovieReview(movieId)
    
      setReviews(reviews)
      if (reviews.length === 0) {
      toast.info('Info is not found', toastConfig);}
      console.log(1,'reviews', reviews)
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
    }, [movieId]);


  return (
    <div>
      My Reviews for {movieId}
      {error !== null && (
        <p>Oops, some error happened. Please, try again later. Error: {error} 
        </p>
      )}
      {isLoading && (<Loading/>)}
      <ul>
        {reviews.map(({ author, content, id}) => (
          <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
           </li>
        ))}
      </ul>
    </div>
  )
}

export default Reviews


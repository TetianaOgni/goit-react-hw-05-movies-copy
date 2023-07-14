import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {fetchMovieReview} from '../../services/fetchMovies'


const Reviews = () => {

  const [reviews, setReviews] = useState([])
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    const fetchMovieData = async () => {
    try {
      const reviews = await fetchMovieReview(movieId)
    
      setReviews(reviews)
      
      console.log(1,'reviews', reviews)
    }
    catch(error){
     console.log(error.message)
    
    }
    }
    fetchMovieData()
    }, [movieId]);


  return (
    <div>
      My Reviews for {movieId}
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


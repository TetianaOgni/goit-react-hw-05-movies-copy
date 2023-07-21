import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {fetchMovieReview} from '../../services/fetchMovies'
import Loading from "components/Loading/Loading";
import { toast } from 'react-toastify';
import  toastConfig  from "notification/Toastify";
import {ReviewsContainer, ReviewsItem, ReviewsList, ReviewsText, ReviewsTitle, ReviewsWrap} from './Reviews.styles'

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


  return (
    <ReviewsContainer>
      {error !== null && (
        <p style={{ color: "red" }}>Oops, some error happened. Please, try again later. Error: {error} 
        </p>
      )}
      {isLoading && (<Loading/>)}
      <ReviewsList>
        {reviews.map(({ author, content, id}) => (
          <ReviewsItem key={id}>
            <ReviewsWrap>
              <ReviewsText>Author:</ReviewsText> 
              <ReviewsTitle>{author}</ReviewsTitle>
            </ReviewsWrap>
                
              <ReviewsText>{content}</ReviewsText>
           </ReviewsItem>
        ))}
      </ReviewsList>
    </ReviewsContainer>
  )
}

export default Reviews


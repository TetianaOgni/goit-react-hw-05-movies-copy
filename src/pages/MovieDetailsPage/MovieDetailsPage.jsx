import { useEffect, useState, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {  Outlet } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { fetchMoviesDetails } from '../../services/fetchMovies';
import errorImg from '../../components/Images/errorImg.jpg';
import {
  MovieContent,
  MovieInfo,
  ImageMovie,
  ImageMovieThumb,
  MovieDetails,
  GoBack,
  GoBackText,
  MovieWrap,
  MovieText,
  CastReviewLink,
  WrapDetails,
  DetailsTitle
} from './MovieDetailsPage.styled';
import {ErrorText} from "../HomePage/HomePage.styled"
import Loading from 'components/Loading/Loading';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchMovieData = async () => {
      try {
        setIsLoading(true);
        const movieDetails = await fetchMoviesDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieData();
  }, [movieId]);

  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    overview,
    genres,
    vote_average,
  } = movieDetails || {};
  let genres_list;
  if (!genres) {
    genres_list = 'Genre is found';
  } else if (genres.length === 1) {
    genres_list = genres[0].name;
  } else {
    genres_list = genres
      .map((genre, index) => {
        if (index !== 0) {
          genre.name = genre.name.toLowerCase();
        }
        return genre.name;
      })
      .join(', ');
  }
  return (
    <MovieDetails>
      <GoBack to={backLinkHref.current}>
        <FaLongArrowAltLeft />
        <GoBackText>Go back</GoBackText>
      </GoBack>
      {error !== null && (
        <ErrorText>
          Oops, some error happened. Please, try again later. Error: {error}
        </ErrorText>
      )}
      {isLoading && (
        <>
          <Loading />
        </>
      )}

      {movieDetails !== null && (
        <MovieContent>
          {poster_path ? (
            <ImageMovieThumb>
              <ImageMovie
                alt={title}
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
  srcSet={`https://image.tmdb.org/t/p/w342${poster_path} 342w,
  https://image.tmdb.org/t/p/w500${poster_path} 500w,
  https://image.tmdb.org/t/p/w780${poster_path} 780w,
  https://image.tmdb.org/t/p/original${poster_path} 1500w`}
  
  width='300'
  height='400'
              />
            </ImageMovieThumb>
          ) : (
            <ImageMovieThumb>
              <ImageMovie src={errorImg} alt="" />
            </ImageMovieThumb>
          )}
          <MovieInfo>
            <h2>
              {title} ({release_date.slice(0, 4)})
            </h2>
            <MovieWrap>
              <MovieText>  
                <p>User Score: {vote_average.toFixed(1) * 10}%</p>
                <DetailsTitle>Overview</DetailsTitle>
                <p>{overview}</p>
                <DetailsTitle>Genres</DetailsTitle>
                <p>{genres_list}</p>
              </MovieText>
            </MovieWrap>
          </MovieInfo>
        </MovieContent>
      )}

      <WrapDetails>
        <li>
          <CastReviewLink to="cast">Cast</CastReviewLink>
        </li>
        <li>
          <CastReviewLink to="reviews">Reviews</CastReviewLink>
        </li>
      </WrapDetails>
      <Outlet />
      <img src={backdrop_path} alt="" />
    </MovieDetails>
  );
};

export default MovieDetailsPage;



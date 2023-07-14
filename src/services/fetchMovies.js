import axios from 'axios';
// const KEY = 'd2aad4829db25ed52746f46f8c4574ea';
const API =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc';


const BASE_URL = 'https://api.themoviedb.org/3';
const options = {
  headers: {
    Authorization:
      `Bearer ${API}`,
    accept: 'application/json',
  },
};
export const fetchTrendyMovies = async() => {
  const {data} = await axios.get(`${BASE_URL}/trending/all/day?language=en-US`, options)
  console.log("data", data)
  const {results} = data
  console.log("results", results)
  return results
  
}


export const fetchMovies = async(movieName) => {
    const {data} = await axios.get(`${BASE_URL}/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, options)
    const {results} = data
  return results
}
// export default fetchMovies

export const fetchMoviesDetails = async movieId => {
  const {data} = await axios.get(`${BASE_URL}/movie/${movieId}?language=en-US`, options)
  console.log("data", data)
  return data
}
// export default fetchMoviesDetails
// fetch('https://api.themoviedb.org/3/search/movie?query=${}&include_adult=false&language=en-US&page=1', options)
// fetch('https://api.themoviedb.org/3/movie/movie_id/credits', options)
export const fetchMovieCast = async movieId => {
  const {data} = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options)
  // console.log(0,"data",response, response.data)
  const {cast} = data
  console.log(0,"data",data)
  console.log(2,"data",cast)


  return cast
}

export const fetchMovieReview = async movieId => {
  const {data} = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options)
  const {results} = data
  console.log(0,"data",data)
  console.log(2,"data",results)
  return results
}
import React from 'react'
import {useLocation} from 'react-router-dom';
import { MoviesLink, MoviesItem } from "./MoviesList.styled.js";

const MoviesList = ({movies}) => {
    const location = useLocation()

  return (
    <ul>
        {movies.map(({title, id, name}) => (
             <MoviesItem key={id}>
             < MoviesLink 
             state={{from: location}} 
             to={`/movies/${id}`} >
               {title ? title : name}
             </ MoviesLink>
           </MoviesItem>
        ))}
      </ul>
  )
}

export default MoviesList

import React from 'react'
import {useLocation} from 'react-router-dom';
// import { toast } from 'react-toastify';
// import  toastConfig  from "notification/Toastify";
import { MoviesLink, MoviesItem, MovList } from "./MoviesList.styled.js";

const MoviesList = ({movies}) => {
    const location = useLocation()
    
  return (
    <MovList>
        {movies.map(({title, id, name}) => (
             <MoviesItem key={id}>
             < MoviesLink 
             state={{from: location}} 
             to={`/movies/${id}`} >
               {title ? title : name}
             </ MoviesLink>
           </MoviesItem>
        ))}
      </MovList>
  )
}

export default MoviesList

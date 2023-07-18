import {useSearchParams} from 'react-router-dom';
import React, { useState,} from "react";

const SearchMovies = () => {
    const [searchValue, setSearchValue] = useState('');
    const [, setSearchParams] = useSearchParams();
    
    const handleSearchParams = (event) => {
        event.preventDefault()
        const searchValue = event.target.children.search.value
        console.log("searchValue", searchValue)
    
        if (searchValue.trim().length > 2 ) {
          setSearchParams({query:  searchValue})
    
        }
      };
  return (
    <div>
      <form onSubmit={handleSearchParams} >
        <input type="text"
        name = "search"
       placeholder="Enter movie"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        required
        minLength={2}
        /> 
       
        <button type='submit' >Search</button>
      </form>

    </div>
  )
}

export default SearchMovies

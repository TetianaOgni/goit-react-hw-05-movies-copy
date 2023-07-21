import {useSearchParams} from 'react-router-dom';
import React, { useState,} from "react";
import {SearchMoviesLine, SearchButton, SearchInput} from './SearchMovies.styled'

const SearchMovies = () => {
    const [searchValue, setSearchValue] = useState('');
    const [, setSearchParams] = useSearchParams();
    
    const handleSearchParams = (event) => {
        event.preventDefault()
        const searchValue = event.target.children.search.value.trim()
    
        if (searchValue.trim().length > 2 ) {
          setSearchParams({query:  searchValue})
    
        }
      };
  return (
    <SearchMoviesLine>
      <form onSubmit={handleSearchParams} >
        <SearchInput type="text"
        name = "search"
       placeholder="Enter movie"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value.trim())}
        required
        minLength={2}
        /> 
       
        <SearchButton type='submit' >Search</SearchButton>
      </form>

    </SearchMoviesLine>
  )
}

export default SearchMovies

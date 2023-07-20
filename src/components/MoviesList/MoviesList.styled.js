import styled from "styled-components";
import { Link } from "react-router-dom";

export const MoviesLink = styled(Link)`
  font-size: 20px;
  color: black;
  
  
  &:hover 
   {
      box-shadow: 0px 11px 10px -7px rgba(16, 110, 253, 1);
      -webkit-box-shadow: 0px 11px 10px -7px rgba(16, 110, 253, 1);
      -moz-box-shadow: 0px 11px 10px -7px rgba(16, 110, 253, 1);
      transform: scale(1.03);
    }
  }
`;


export const MoviesItem = styled.li`
margin-bottom: 10px;

`
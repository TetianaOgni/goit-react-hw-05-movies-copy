import styled from "styled-components";
import { Link } from "react-router-dom";

export const MoviesLink = styled(Link)`
  font-size: 18px;
  color: rgb(182, 190, 202);
  text-decoration: none;
  // outline: 1px solid black
  border-bottom: 2px solid rgb(20, 19, 19);
 

  
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
// border-bottom: 2px solid rgb(20, 19, 19);
`
export const MovList = styled.ul`
margin-top: 50px;
column-count: 2;
-webkit-column-count: 2;
-moz-column-count: 2;
column-gap: 50px;
-webkit-column-gap: 50px;
-moz-column-gap: 50px;
column-rule: 1px solid #171515;
-webkit-column-rule: 1px solid #171515;
-moz-column-rule: 1px solid #171515;

`
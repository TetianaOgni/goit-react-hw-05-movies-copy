import styled from "styled-components";

export const ReviewsContainer = styled.div`
margin-bottom: 50px;
`

export const ReviewsItem = styled.li`
   margin-bottom: 20px;
   &:hover{
    background-color: white;
    border-radius: 3px;
    padding: 20px;
    
    text-decoration: none;

  box-shadow: 0px 0px 76px 32px rgba(13,12,12,1) inset;
-webkit-box-shadow: 0px 0px 76px 32px rgba(13,12,12,1) inset;
-moz-box-shadow: 0px 0px 76px 32px rgba(13,12,12,1) inset;
}
  
`

export const ReviewsList = styled.ul`
display: flex;
flex-direction: column;
`

export const ReviewsText = styled.p`
font-size: 15px;
color: rgb(182, 190, 202);
 &:hover{
  color: black;
}

`

export const ReviewsTitle = styled.h3`
font-size: 15px;
font-weight: 500;
text-transform: uppercase;
  font-family: Verdana, sans-serif;
color: white;

`
export const ReviewsWrap = styled.div`
display: flex;
align-items: baseline;
gap: 20px;
text-decoration: underline;
margin-bottom: 3px;

`

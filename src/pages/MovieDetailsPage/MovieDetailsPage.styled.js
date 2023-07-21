import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieContent = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;

export const ImageMovieThumb = styled.div`
  border-radius: 2px;
  height: 400px;
  width: 300px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const ImageMovie = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px -2px 28px -2px rgba(96, 255, 0, 0.96);
    -webkit-box-shadow: 0px -2px 28px -2px rgba(96, 255, 0, 0.96);
    -moz-box-shadow: 0px -2px 28px -2px rgba(96, 255, 0, 0.96);

    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const MovieInfo = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`;
export const MovieWrap = styled.div`
  background-color: white;
  border-radius: 3px;
  // width: 500px;
  height: 300px;
  // margin-top: 30px;
  padding: 40px;

  box-shadow: 10px 10px 79px 9px rgba(0,0,0,0.57) inset;
-webkit-box-shadow: 10px 10px 79px 9px rgba(0,0,0,0.57) inset;
-moz-box-shadow: 10px 10px 79px 9px rgba(0,0,0,0.57) inset;
`;

export const MovieText = styled.div`

 overflow: auto;
 height: 220px;
 font-size: 15px
`;
export const GoBack = styled(Link)`
  color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  gap: 12px;
  margin-bottom: 20px;

  &:hover{
    color: white;
  }
`;
export const WrapDetails = styled.ul`
padding: 0px 0px 5px 15px;

border-bottom: 1px solid black;
display: flex;
gap: 50px;
margin-bottom: 50px;

`;
export const GoBackText = styled.p``;
export const CastReviewLink = styled(Link)`
font-size: 18px;
  color: rgb(182, 190, 202);
 &:hover{
  box-shadow: 0px 7px 5px -3px rgba(222,242,7,0.52);
  -webkit-box-shadow: 0px 7px 5px -3px rgba(222,242,7,0.52);
  -moz-box-shadow: 0px 7px 5px -3px rgba(222,242,7,0.52);

 } 
`
export const MovieDetails = styled.div``
export const DetailsTitle = styled.h3`
margin-top: 15px;
`
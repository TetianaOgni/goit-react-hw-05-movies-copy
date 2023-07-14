import styled from "styled-components";

export const MovieContent = styled.div`
    display: flex;
   
    // justify-content:  space-between;
    gap: 30px; 
    margin: 0

`


export const ImageMovieThumb = styled.div`
  border-radius: 2px;
  height: 400px;
  width: 300px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  

`
export const ImageMovie = styled.img`

    display: block;
    height: 100%;
    width: 100%;

object-fit: cover;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);


&:hover {
    box-shadow: 0px -2px 28px -2px rgba(96,255,0,0.96);
-webkit-box-shadow: 0px -2px 28px -2px rgba(96,255,0,0.96);
-moz-box-shadow: 0px -2px 28px -2px rgba(96,255,0,0.96);
//     box-shadow: 0px 0px 11px 4px rgba(21,0,255,0.96);
// -webkit-box-shadow: 0px 0px 11px 4px rgba(21,0,255,0.96);
// -moz-box-shadow: 0px 0px 11px 4px rgba(21,0,255,0.96);
  transform: scale(1.03);
  cursor: zoom-in;
}
`
export const MovieInfo = styled.div`
  width: 500px; 

`
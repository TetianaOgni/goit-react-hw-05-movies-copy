import styled from "styled-components";


// CastList, CastItem, CastImage
export const CastList = styled.ul`
   
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    // grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 28px;
    grid-row-gap: 24px; 
    margin-bottom: 50px;
`
export const CastItem = styled.li`
display: flex;
flex-direction: column;
gap: 10px;
color: rgb(182, 190, 202);
height: 300px;
border-radius: 2px;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

`
export const CastImage = styled.img`
display: block;

width: 100%;
height: 260px;

  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 0px 9px 3px rgba(250,241,241,0.93);
-webkit-box-shadow: 0px 0px 9px 3px rgba(250,241,241,0.93);
-moz-box-shadow: 0px 0px 9px 3px rgba(250,241,241,0.93);

    transform: scale(1.03);
    cursor: zoom-in;
`
export const CastText = styled.p`
 margin: 0 auto;

`
import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.div`
max-width: 960px;
margin: 0 auto;
padding: 0 16px;

`
export const Header = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;


  }
  `
export const Nav = styled.nav`
  display: flex;
  align-items: center;
//   justify-content: space-between;
  gap: 20px;
`


export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  outline: 1px solid rgb(20, 19, 19);
  color: black;
  font-weight: 500;

  &.active {
    
    background-color: #fff;
    box-shadow: 0px -2px 28px -2px rgba(59,55,55,0.71) inset;
    -webkit-box-shadow: 0px -2px 28px -2px rgba(59,55,55,0.71) inset;
    -moz-box-shadow: 0px -2px 28px -2px rgba(59,55,55,0.71) inset;
    
    
  }
  &:hover {
    background-color: rgb(237, 232, 232);
    box-shadow: 0px 0px 11px 0px rgba(253,0,0,1);
-webkit-box-shadow: 0px 0px 11px 0px rgba(253,0,0,1);
-moz-box-shadow: 0px 0px 11px 0px rgba(253,0,0,1);
  transform: scale(1.03);
  cursor: pointer;
}
`;
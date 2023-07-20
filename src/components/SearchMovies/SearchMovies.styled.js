import styled from 'styled-components';
export const SearchMoviesLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SearchInput = styled.input`
  width: 240px;
  height: 30px;
  font-size: 20px;
`;
export const SearchButton = styled.button`
  height: 30px;
  font-size: 20px;
  &.active {
    background-color: #fff;
    box-shadow: 0px -2px 28px -2px rgba(59, 55, 55, 0.71) inset;
    -webkit-box-shadow: 0px -2px 28px -2px rgba(59, 55, 55, 0.71) inset;
    -moz-box-shadow: 0px -2px 28px -2px rgba(59, 55, 55, 0.71) inset;
    color: rgb(53, 53, 52);
  }
  &:hover {
    background-color: rgb(237, 232, 232);
    box-shadow: 0px 0px 11px 0px rgba(253, 0, 0, 1);
    -webkit-box-shadow: 0px 0px 11px 0px rgba(253, 0, 0, 1);
    -moz-box-shadow: 0px 0px 11px 0px rgba(253, 0, 0, 1);

    box-shadow: 0px 0px 8px 2px rgba(232, 253, 4, 0.82);
    -webkit-box-shadow: 0px 0px 8px 2px rgba(232, 253, 4, 0.82);
    -moz-box-shadow: 0px 0px 8px 2px rgba(232, 253, 4, 0.82);

    border-color: white;
    transform: scale(1.03);
    cursor: pointer;

    color: rgb(53, 53, 52);
  }
`;

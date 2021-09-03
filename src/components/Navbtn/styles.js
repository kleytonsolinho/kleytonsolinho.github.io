import styled from 'styled-components';

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;
export const NavBtnLinks = styled.a`
  width: 100px;
  height: 45px;
  color: #50fa7b;
  background-color: transparent;
  border: 1px solid #50fa7b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-decoration: none;
  font-family: 'Poppins' sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
  margin-left: 20px;

  .icon {
    margin-right: 5px;
  }

  &:hover {
    text-decoration: none;
    background: rgba(80,250,123,0.3);
    font-weight: bold;
    cursor: pointer;
  }
`;

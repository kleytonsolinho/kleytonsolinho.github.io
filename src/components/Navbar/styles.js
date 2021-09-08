import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: rgba(10, 25, 47, 0.85);
  height: 100px;
  max-height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: fixed;
  top: -100%;
  z-index: 2;
  padding: 0 80px;
  backdrop-filter: blur(10px);
  -webkit-box-shadow: 0px 10px 20px 5px #0B1930;
  box-shadow: 0px 10px 20px 5px #0B1930;

  animation: FadeInNavbar 2s ease 3s forwards;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  .active {
    animation: FadeInNavbar 2s ease 500ms forwards;
  }

  .desactive {
    animation: FadeOutNavbar 2s ease 500ms forwards;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 1268px;
`;

export const NavLogo = styled.a`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  text-decoration: none;

  img {
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 120px;
    cursor: pointer;

    &:hover {
      top: -2px;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--text-first);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 100px;
`;
export const NavLinks = styled(LinkS)`
  color: var(--text-second);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1.2rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  text-transform: lowercase;
  position: relative;

  span {
    color: var(--green);

    &:hover {
      font-weight: bold;
      top: -2px;
    }
  }

  &:hover {
    font-weight: 500;
    color: var(--text-first);
    top: -2px;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLinks = styled.a`
  width: 100px;
  height: 45px;
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
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
    color: #fff;
  }
`;

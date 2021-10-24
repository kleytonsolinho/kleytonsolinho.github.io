import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
  height: 100px;
  max-height: 100px;
  width: 100%;
  padding: 0 80px;

  position: fixed;
  top: -100%;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(10, 25, 47, 0.85);
  font-size: 1rem;

  backdrop-filter: blur(10px);
  -webkit-box-shadow: 0px 10px 20px 5px #0b1930;
  box-shadow: 0px 10px 20px 5px #0b1930;

  animation: FadeInNavbar 2s ease 3s forwards;

  @media screen and (max-width: 830px) {
    padding: 0 100px 0 20px;
  }

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
  height: 100%;
  width: 100%;
  max-width: 1268px;

  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled.a`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  text-decoration: none;

  img {
    width: 100%;
    height: 100%;

    position: relative;
    top: 0;
    left: 0;
    z-index: 10;

    cursor: pointer;

    &:hover {
      top: -2px;
    }
  }
`;

export const MobileMenu = styled.div`
  width: auto;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MobileBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (min-width: 830px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 830px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;

    font-size: 2.3rem;
    color: var(--text-first);
    cursor: pointer;

    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 830px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 100px;
`;
export const NavLinks = styled(Link)`
  height: 100%;
  padding: 0 1rem;

  position: relative;
  display: flex;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  text-decoration: none;
  color: var(--text-second);
  text-transform: lowercase;

  cursor: pointer;

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
`;

export const NavBtnLinks = styled.a`
  width: 100px;
  height: 45px;
  margin-left: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Poppins" sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--green);
  text-decoration: none;

  background-color: transparent;

  border: 1px solid var(--green);
  border-radius: 5px;

  @media screen and (max-width: 350px) {
    display: none;
  }

  .icon {
    margin-right: 5px;
  }

  &:hover {
    text-decoration: none;
    background: rgba(80, 250, 123, 0.3);
    font-weight: bold;
    cursor: pointer;
    color: #fff;
  }
`;

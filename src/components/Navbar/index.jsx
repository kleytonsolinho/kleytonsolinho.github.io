import { FaBars, FaFilePdf } from 'react-icons/fa';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileMenu,
  MobileBtn,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLinks,
} from './styles';

import imgLogo from '../../assets/logo.png';

export default function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo onClick={() => window.scrollTo({ top: 0 })}>
            <img src={imgLogo} alt="" />
          </NavLogo>
          <MobileMenu>
            <MobileBtn>
              <NavBtnLinks to="/resume">
                <FaFilePdf className="icon" />
                Resume
              </NavBtnLinks>
            </MobileBtn>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
          </MobileMenu>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">
                <span>.</span>
                about
                <span>( )</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="work">
                <span>.</span>
                work
                <span>( )</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="experience">
                <span>.</span>
                experience
                <span>( )</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">
                <span>.</span>
                contact
                <span>( )</span>
              </NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLinks to="/resume">
                <FaFilePdf className="icon" />
                Resume
              </NavBtnLinks>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

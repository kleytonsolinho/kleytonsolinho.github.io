import { FaBars, FaFilePdf } from 'react-icons/fa';

import {
  Nav,
  NavbarContainer,
  NavLogo,
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
          <NavLogo to="/" spy smoth>
            <img src={imgLogo} alt="" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" spy smooth>
                <span>.</span>
                about
                <span>( )</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="work" spy smooth>
                <span>.</span>
                work
                <span>( )</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="experience" spy smooth>
                <span>.</span>
                experience
                <span>( )</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" spy smooth>
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

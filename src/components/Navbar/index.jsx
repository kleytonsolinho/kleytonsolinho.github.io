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
          <NavLogo to="/" scrollToTop={0}>
            <img src={imgLogo} alt="" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="healthy">
                <span>.</span>
                about
                <span>( )</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="blog">
                <span>.</span>
                work
                <span>( )</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="blog">
                <span>.</span>
                experience
                <span>( )</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="join">
                <span>.</span>
                contact
                <span>( )</span>
              </NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLinks to="/register">
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

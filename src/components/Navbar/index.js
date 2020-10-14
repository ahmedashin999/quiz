import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Link } from 'react-router-dom';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
         <>
          <Nav>
              <NavbarContainer>
                   
                  <NavLogo to="/"   >
                      sportsgrading
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="/sports-grading-blog">BLOG</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="/help">WHAT IS UTN</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="https://marconitennis.com.au/">MARCONI TENNIS AND SQUASH</NavLinks>
                      </NavItem>
                  </NavMenu>
              </NavbarContainer>
          </Nav>
         </>
    )
}

export default Navbar

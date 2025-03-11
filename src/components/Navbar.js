import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Nav = styled.nav`
  background-color: ${props => props.scrolled ? '#ffffff' : 'transparent'};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

const NavLogo = styled.div`
  color: ${props => props.scrolled ? '#343434' : '#ffffff'};
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-family: var(--heading-font);
  letter-spacing: 2px;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.scrolled ? '#95e1d3' : '#ffffff'};
    transform: translateY(-2px);
  }
`;

const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${props => props.scrolled ? '#343434' : '#ffffff'};
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '80px' : '-1000px')};
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    background: #ffffff;
  }
`;

const NavItem = styled.li`
  height: 80px;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    
    &:hover {
      border: none;
    }
  }
`;

const NavLinks = styled(Link)`
  color: ${props => props.scrolled ? '#343434' : '#ffffff'};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: var(--body-font);
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #95e1d3;
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #95e1d3;
  }
  
  &:hover:after,
  &.active:after {
    width: 30px;
  }
  
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #343434;
    
    &:hover {
      color: #95e1d3;
      transition: all 0.3s ease;
    }
  }
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', changeNav);
    
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);
  
  return (
    <Nav scrolled={scrolled}>
      <NavbarContainer>
        <NavLogo scrolled={scrolled} to="home" onClick={() => window.scrollTo(0, 0)}>DROOMS</NavLogo>
        <MobileIcon scrolled={scrolled} onClick={toggle}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLinks 
              scrolled={scrolled}
              to="home" 
              smooth={true} 
              duration={500} 
              spy={true} 
              exact="true" 
              offset={-80}
              onClick={toggle}
            >
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              scrolled={scrolled}
              to="salas" 
              smooth={true} 
              duration={500} 
              spy={true} 
              exact="true" 
              offset={-80}
              onClick={toggle}
            >
              Salas
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              scrolled={scrolled}
              to="agenda" 
              smooth={true} 
              duration={500} 
              spy={true} 
              exact="true" 
              offset={-80}
              onClick={toggle}
            >
              Agenda
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              scrolled={scrolled}
              to="sobre" 
              smooth={true} 
              duration={500} 
              spy={true} 
              exact="true" 
              offset={-80}
              onClick={toggle}
            >
              Sobre
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              scrolled={scrolled}
              to="parceiros" 
              smooth={true} 
              duration={500} 
              spy={true} 
              exact="true" 
              offset={-80}
              onClick={toggle}
            >
              Parceiros
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar; 
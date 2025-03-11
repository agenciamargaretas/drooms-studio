import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid #95e1d3;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #343434;
  text-shadow: 3px 3px 0px #95e1d3;
  transform: rotate(-2deg);
  font-family: 'Courier New', monospace;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #343434;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 8px 15px;
  border: 2px solid #343434;
  transform: rotate(1deg);
  transition: all 0.2s;
  font-family: 'Courier New', monospace;
  
  &:hover {
    background-color: #95e1d3;
    transform: rotate(-1deg);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>DROOMS</Logo>
      <Nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/salas">SALAS</NavLink>
        <NavLink to="/agendar">AGENDAR</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header; 
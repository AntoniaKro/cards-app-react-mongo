import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  margin: 20px;
  text-decoration: none;
  font-size: 20px;
  background: rgb(69, 197, 165);
  color: white;
  border-radius: 5px;
  padding: 10px;
  font-family: monospace;

  &.active {
    background: rgb(5, 87, 66);
  }
`;

const StyledNav = styled.div`
  grid-row: 3;
  display: flex;
  justify-content: center;
`;

function Navbar() {
  return (
    <StyledNav>
      <StyledLink to="/">HOME</StyledLink>
      <StyledLink to="/create">CREATE</StyledLink>
    </StyledNav>
  );
}

export default Navbar;

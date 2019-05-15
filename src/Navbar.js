import React from 'react';
import styled from 'styled-components';

function Navbar() {
  const StyledNav = styled.nav`
    justify-items: center;
    align-items: center;
    margin: 20px;
  `;
  return (
    <Navbar>
      <StyledNav>HOME</StyledNav>
      <StyledNav>CREATE</StyledNav>
    </Navbar>
  );
}

export default Navbar;

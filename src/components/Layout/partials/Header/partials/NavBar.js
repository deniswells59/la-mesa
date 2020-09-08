import React from 'react';
import styled from 'styled-components';

import { COLORS } from 'theme';

const Wrapper = styled.nav`
  position: relative;
  background: ${COLORS.WHITE};
  box-shadow: 1px 0px 5px 0px #11111182;
  padding: 0px 48px;
`;

const Logo = styled.img`
  width: 195px;
  position: absolute;
  left: 24px;
  top: 24px;
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  column-gap: 36px;
  justify-content: flex-end;
`;

const NavBar = ({ children }) => (
  <Wrapper>
    <Logo src={'/logo.png'} alt="Logo" />

    <NavList>{children}</NavList>
  </Wrapper>
);

export default NavBar;

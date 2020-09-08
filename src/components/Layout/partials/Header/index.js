import React from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';
import AddressBar from './partials/AddressBar';
import NavBar from './partials/NavBar';

import { COLORS, TEXT } from 'theme';

const Wrapper = styled(Flex)`
  width: 100%;
  position: fixed;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-items: center;
  height: 64px;

  color: ${COLORS.PRIMARY};
  font-family: ${TEXT.yanone};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
`;

const Header = () => (
  <Wrapper column>
    <AddressBar>329 Lincoln Center, Stockton, CA</AddressBar>

    <NavBar>
      <NavItem>Home</NavItem>
      <NavItem>Menu</NavItem>
      <NavItem>Reservations</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Careers</NavItem>
      <NavItem>Gallery</NavItem>
    </NavBar>
  </Wrapper>
);

export default Header;

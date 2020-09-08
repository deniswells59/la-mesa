import React, { Fragment } from 'react';
import styled from 'styled-components';

import NavItems from './NavItems';

import { COLORS } from 'theme';

const MobileNavList = styled.ul`
  height: 100vh;
  width: 55%;
  background: ${COLORS.WHITE};
  z-index: 1000;

  position: absolute;
  top: 0;
  right: ${({ menuOpen }) => (menuOpen ? '0' : '-55%')};
  transition: right 0.5s ease-out;

  flex-direction: column;
  justify-content: flex-start;

  li {
    padding: 20px;
  }
`;

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${COLORS.BLACK};
  opacity: 0.3;
  z-index: 100;

  position: absolute;
  top: 0;
  right: ${({ menuOpen }) => (menuOpen ? '0' : '-100%')};
  transition: right 0.4s ease-out;
`;

const MobileNav = ({ menuOpen, setMenuOpen }) => (
  <Fragment>
    <Overlay menuOpen={menuOpen} onClick={() => setMenuOpen(false)} />

    <MobileNavList menuOpen={menuOpen}>
      <NavItems />
    </MobileNavList>
  </Fragment>
);

export default MobileNav;

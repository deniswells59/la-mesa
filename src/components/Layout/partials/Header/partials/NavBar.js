import React, { useState } from 'react';
import styled from 'styled-components';

import { BiMenu } from 'react-icons/bi';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

import logo from '../../../../../../static/logo.png';

import { COLORS } from 'theme';

const Container = styled.nav`
  position: relative;
  display: flex;
  align-items: center;

  background: ${COLORS.WHITE};
  box-shadow: 1px 0px 5px 0px #11111182;
  height: 64px;
  padding: ${({ isMobile }) => (isMobile ? '0px 24px' : '0px 48px')};
`;

const Logo = styled.img`
  width: ${({ isMobile }) => (isMobile ? '128px' : '195px')};
  position: ${({ isMobile }) => (isMobile ? 'relative' : 'absolute')};

  ${({ isMobile }) =>
    !isMobile &&
    `
    left: 24px;
    top: 24px;
  `}
`;

const ContentWrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  column-gap: 36px;
  justify-content: flex-end;
`;

const MobileMenuButton = styled.button`
  border: none;
  background: none;
  padding: 0px;
`;

const NavBar = ({ isMobile }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container isMobile={isMobile}>
      <Logo isMobile={isMobile} src={logo} alt="Logo" />

      {isMobile && (
        <ContentWrapper>
          <MobileMenuButton onClick={() => setMenuOpen(true)}>
            <BiMenu />
          </MobileMenuButton>
        </ContentWrapper>
      )}

      {!isMobile && (
        <ContentWrapper isMobile={isMobile}>
          <NavItems />
        </ContentWrapper>
      )}

      {isMobile && <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
    </Container>
  );
};

export default NavBar;

import React from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';
import AddressBar from './partials/AddressBar';
import NavBar from './partials/NavBar';

import { useMobileDetection } from 'providers/MobileDetectionProvider';

const Wrapper = styled(Flex)`
  width: 100%;
  position: fixed;
`;

const Header = () => {
  const { isMobile } = useMobileDetection();

  return (
    <Wrapper column>
      <AddressBar>329 Lincoln Center, Stockton, CA</AddressBar>

      <NavBar isMobile={isMobile} />
    </Wrapper>
  );
};

export default Header;

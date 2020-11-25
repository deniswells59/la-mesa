import React from 'react';
import styled from 'styled-components';
import { FiMapPin, FiPhone } from 'react-icons/fi';

import Flex from 'components/Flex';

import { COLORS } from 'theme';

import { useMobileDetection } from 'providers/MobileDetectionProvider';

const Wrapper = styled(Flex)`
  background: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};

  padding: ${(props) => (props.isMobile ? '12px' : '10px')};

  justify-content: ${(props) => (props.isMobile ? 'flex-end' : 'center')};
  align-items: center;
`;

const Link = styled.a`
  margin: ${(props) => (props.isMobile ? '0px 4px' : '0px 10px')};
  color: inherit;
  text-decoration: none;
`;

const iconStyles = {
  margin: '0px 8px',
};

const AddressBar = () => {
  const { isMobile } = useMobileDetection();

  return (
    <Wrapper isMobile={isMobile}>
      <Link
        isMobile={isMobile}
        href="https://goo.gl/maps/Qgk19KGiySMuXfnu6"
        target="_blank"
        rel="noreferrer"
      >
        <Flex centerVert>
          <FiMapPin color={COLORS.WHITE} size={isMobile ? '28' : '16'} style={iconStyles} />
          {!isMobile && '329 Lincoln Center, Stockton, CA'}
        </Flex>
      </Link>

      <Link isMobile={isMobile} href="tel:2093953818">
        <Flex centerVert>
          <FiPhone color={COLORS.WHITE} size={isMobile ? '28' : '16'} style={iconStyles} />
          {!isMobile && '209-395-3818'}
        </Flex>
      </Link>
    </Wrapper>
  );
};

export default AddressBar;

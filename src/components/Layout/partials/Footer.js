import React from 'react';
import styled from 'styled-components';

import {
  FaFacebookF,
  // FaInstagram,
  FaYelp,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import Flex from 'components/Flex';

import { useMobileDetection } from 'providers/MobileDetectionProvider';

import { COLORS } from 'theme';

const Wrapper = styled(Flex)`
  height: 64px;
  padding: ${({ isMobile }) => (isMobile ? '12px 16px' : '0px 16px')};

  background: ${COLORS.PRIMARY};
  color: ${COLORS.SECONDARY};
  justify-content: space-between;
`;

const IconWrapper = styled(Flex)`
  svg {
    padding: 8px;
  }
`;

const Copyright = styled(Flex)``;

const Footer = () => {
  const { isMobile } = useMobileDetection();

  return (
    <Wrapper centerVert column={isMobile ? true : false} isMobile={isMobile}>
      <IconWrapper>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/La-Mesa-A-Mexican-Kitchen-100702048461188/"
        >
          <FaFacebookF color={COLORS.SECONDARY} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.yelp.com/biz/la-mesa-a-mexican-kitchen-stockton"
        >
          <FaYelp color={COLORS.SECONDARY} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/Qgk19KGiySMuXfnu6">
          <FaMapMarkerAlt color={COLORS.SECONDARY} />
        </a>
      </IconWrapper>

      <Copyright>&copy; La Mesa. All rights reserved {new Date().getFullYear()}</Copyright>
    </Wrapper>
  );
};

export default Footer;

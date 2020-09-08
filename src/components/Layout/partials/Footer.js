import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';

import { FaFacebookF, FaInstagram, FaYelp, FaMapMarkerAlt } from 'react-icons/fa';

import Flex from 'components/Flex';

import { COLORS } from 'theme';

const Wrapper = styled(Flex)`
  height: 64px;
  padding: 0px 16px;

  background: ${COLORS.GRAY};
  justify-content: space-between;
`;

const IconWrapper = styled(Flex)`
  svg {
    padding: 8px;
  }
`;

const Copyright = styled(Flex)``;

const iconStyles = {
  color: COLORS.PRIMARY,
  size: '24px',
};

const Footer = () => (
  <Wrapper centerVert>
    <IconWrapper>
      <IconContext.Provider value={iconStyles}>
        <FaFacebookF />
        <FaInstagram />
        <FaYelp />
        <FaMapMarkerAlt />
      </IconContext.Provider>
    </IconWrapper>

    <Copyright>&copy; La Mesa. All rights reserved {new Date().getFullYear()}</Copyright>
  </Wrapper>
);

export default Footer;

import React from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';
import ImgWithOverlay from 'components/Home/ImgWithOverlay';

import { COLORS } from 'theme';

const ContentWrapper = styled.h1`
  position: absolute;
  padding: 20px;
  background: ${COLORS.HIGHLIGHT};
  border-radius: 2px;

  color: ${COLORS.SECONDARY};
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const Banner = ({ children, img }) => {
  return (
    <Flex column>
      <ImgWithOverlay source={img} height="400px" width="100%">
        <ContentWrapper>{children}</ContentWrapper>
      </ImgWithOverlay>
    </Flex>
  );
};

export default Banner;

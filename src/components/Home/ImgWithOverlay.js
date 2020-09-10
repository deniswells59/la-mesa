import React from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';

const overlayCss = `
&:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  opacity: 0.4;
}`;

const ImgWrapper = styled(Flex)`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};

  position: relative;
  overflow: hidden;
`;

const Img = styled.div`
  background-image: ${(props) => `url(${props.source})`};

  height: 100%;
  width: 100%;

  position: relative;
  background-size: cover;
  background-position: 50% 50%;

  ${overlayCss}
`;

const ImgWithOverlay = ({ children, source, height, width, margin = '0px' }) => (
  <ImgWrapper center centerVert height={height} width={width} margin={margin}>
    <Img source={source} />

    {children}
  </ImgWrapper>
);

export default ImgWithOverlay;

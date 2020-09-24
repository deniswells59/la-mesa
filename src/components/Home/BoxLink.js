import React from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';
import Button from 'components/Button';

import { COLORS } from 'theme';

import { useMobileDetection } from 'providers/MobileDetectionProvider';

const Wrapper = styled(Flex)`
  margin: 40px 10%;
  justify-content: space-around;

  ${({ inverse }) => inverse && 'flex-direction: row-reverse;'}
  ${({ isMobile }) => isMobile && 'flex-direction: column-reverse'}
`;

const BorderedBox = styled(Flex)`
  border: 2px solid ${COLORS.PRIMARY};

  height: 400px;
  width: 50%;
  max-width: 400px;

  justify-content: space-between;

  ${({ isMobile }) =>
    isMobile &&
    `
    width: 100%;
    max-width: 1000px;
  `}
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
  min-width: 180px;

  margin: 60px;
`;

const Text = styled.p`
  margin: 60px;
`;

const Img = styled.img`
  width: 50%;
  max-width: 480px;

  ${({ isMobile }) =>
    isMobile &&
    `
    width: 100%;
    max-width: 1000px;
    border: 2px solid ${COLORS.PRIMARY};
    border-bottom: 0px;
  `}
`;

const BoxLink = ({ inverse = false, img, copy, buttonText }) => {
  const { isMobile } = useMobileDetection();

  return (
    <Wrapper center centerVert inverse={inverse} isMobile={isMobile}>
      <BorderedBox column isMobile={isMobile}>
        <Text>{copy}</Text>
        <StyledButton>{buttonText}</StyledButton>
      </BorderedBox>

      <Img src={img} isMobile={isMobile} />
    </Wrapper>
  );
};

export default BoxLink;

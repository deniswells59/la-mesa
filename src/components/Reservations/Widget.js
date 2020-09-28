import React from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';

import { COLORS } from 'theme';
import widgetPrev from '../../../static/widget_preview.jpg';
import { useMobileDetection } from 'providers/MobileDetectionProvider';

const Wrapper = styled(Flex)`
  margin: auto;

  justify-content: space-between;
`;

const TextWrapper = styled(Flex)`
  max-width: 400px;
  padding: 64px;

  text-align: ${({ isMobile }) => (isMobile ? 'center' : 'left')};
`;

const Title = styled.h2`
  color: ${COLORS.BLACK};
  font-size: 48px;
  margin: 0px 0px 48px 0px;

  text-transform: uppercase;
`;

const Text = styled.p`
  color: ${COLORS.BLACK};
  font-size: 16x;
`;

const PreviewWidget = styled.img`
  width: 200px;
  padding: 64px;
`;

const Widget = () => {
  const { isMobile } = useMobileDetection();

  return (
    <Wrapper center centerVert column={isMobile}>
      <TextWrapper column isMobile={isMobile}>
        <Title>Make A Reservation</Title>
        <Text>
          La Mesa, a neighborhood restaurant, provides a feeling of service and satisfaction.
          Everyone is welcome to stop by any time and for any occasion.
        </Text>
      </TextWrapper>

      <PreviewWidget src={widgetPrev} />
    </Wrapper>
  );
};

export default Widget;

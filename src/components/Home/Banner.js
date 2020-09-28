import React, { Fragment } from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';
import Link from 'components/Link';
import Button from 'components/Button';
import ImgWithOverlay from 'components/Home/ImgWithOverlay';

import imgLg from '../../../static/reservations.jpg';
import imgSm from './images/banner-lg.png';

import { useMobileDetection } from 'providers/MobileDetectionProvider';

const Logo = styled.img`
  position: absolute;

  width: ${(props) => (props.isMobile ? '75%' : '50%')};
  height: auto;
`;

const StyledLink = styled(Link)`
  position: absolute;
`;

const BannerButton = styled(Button)`
  width: 200px;
  height: 64px;
`;

const Banner = () => {
  const { isMobile } = useMobileDetection();

  return (
    <Flex column>
      <ImgWithOverlay source={imgLg} height="400px" width="100%">
        <Logo src="/logo.png" alt="Logo" isMobile={isMobile} />
      </ImgWithOverlay>

      <Flex column={isMobile ? true : false}>
        <ImgWithOverlay
          source={imgSm}
          height="240px"
          width={isMobile ? '100%' : '50%'}
          margin={isMobile ? '10px 0px 0px' : '10px 5px 0px 0px'}
        >
          <StyledLink to="/reservations">
            <BannerButton highlight>Reservations</BannerButton>
          </StyledLink>
        </ImgWithOverlay>

        <ImgWithOverlay
          source={imgSm}
          height="240px"
          width={isMobile ? '100%' : '50%'}
          margin={isMobile ? '10px 0px 0px' : '10px 0px 0px 5px'}
        >
          <StyledLink to="/menu">
            <BannerButton highlight>Menu</BannerButton>
          </StyledLink>
        </ImgWithOverlay>
      </Flex>
    </Flex>
  );
};

export default Banner;

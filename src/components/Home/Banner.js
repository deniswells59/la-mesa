import React, { Fragment } from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';
import Button from 'components/Button';
import ImgWithOverlay from 'components/Home/ImgWithOverlay';

import imgLg from './images/banner-lg.png';

const Logo = styled.img`
  position: absolute;

  width: 50%;
  height: auto;
`;

const BannerButton = styled(Button)`
  position: absolute;
  width: 200px;
  height: 64px;
`;

const Banner = () => (
  <Flex column>
    <ImgWithOverlay source={imgLg} height="400px" width="100%">
      <Logo src="/logo.png" alt="Logo" />
    </ImgWithOverlay>

    <Flex>
      <ImgWithOverlay source={imgLg} height="240px" width="50%" margin="10px 5px 0px 0px">
        <BannerButton>Reservations</BannerButton>
      </ImgWithOverlay>
      <ImgWithOverlay source={imgLg} height="240px" width="50%" margin="10px 0px 0px 5px">
        <BannerButton>Menu</BannerButton>
      </ImgWithOverlay>
    </Flex>
  </Flex>
);

export default Banner;

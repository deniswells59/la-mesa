import React from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';
import Link from 'components/Link';
import Button from 'components/Button';
import ImgWithOverlay from 'components/Home/ImgWithOverlay';

import logo from '../../../static/logo.png';
import imgLg from '../../../static/banner.jpg';
import bannerLeft from '../../../static/banner-left.jpg';
import bannerRight from '../../../static/banner-right.jpg';

import { useMobileDetection } from 'providers/MobileDetectionProvider';

const Logo = styled.img`
  position: absolute;

  width: ${(props) => (props.isMobile ? '75%' : '50%')};
  height: auto;
`;

const StyledLink = styled(Link)`
  position: absolute;
`;

const StyledHref = styled.a`
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
        <Logo src={logo} alt="Logo" isMobile={isMobile} />
      </ImgWithOverlay>

      <Flex column={isMobile ? true : false}>
        <ImgWithOverlay
          source={bannerLeft}
          height="240px"
          width={isMobile ? '100%' : '50%'}
          margin={isMobile ? '10px 0px 0px' : '10px 5px 0px 0px'}
        >
          <StyledHref
            target="_blank"
            rel="noreferrer"
            href="https://www.toasttab.com/la-mesa-329-lincoln-center/v3"
          >
            <BannerButton highlight>Order Online</BannerButton>
          </StyledHref>
        </ImgWithOverlay>

        <ImgWithOverlay
          source={bannerRight}
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

import React from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Flex from 'components/Flex';
import Banner from 'components/Banner';
import Button from 'components/Button';
import Link from 'components/Link';

import Widget from 'components/Reservations/Widget';

import { COLORS } from 'theme';
import { useMobileDetection } from 'providers/MobileDetectionProvider';

import CONFIG from 'config/Reservations';

const FullWidthContent = styled(Flex)`
  background: ${COLORS.PRIMARY};
  padding: 48px;
  margin: 20px;
`;

const LinkButton = styled(Button)`
  padding: 16px;
`;

const Title = styled.h2`
  color: ${COLORS.WHITE};
  font-size: ${({ isMobile }) => (isMobile ? '36px' : '48px')};
  margin: 0px 0px 48px 0px;

  text-transform: uppercase;

  ${({ isMobile }) =>
    isMobile &&
    `
    text-align: center;
  `};
`;

export default function Reservations() {
  const { isMobile } = useMobileDetection();

  return (
    <Layout>
      <Banner img={CONFIG.bannerImg}>Reservations</Banner>

      <Widget />

      <FullWidthContent column center centerVert>
        <Title isMobile={isMobile}>Checkout our menu</Title>
        <Link to="/menu">
          <LinkButton highlight>View Our Menu</LinkButton>
        </Link>
      </FullWidthContent>
    </Layout>
  );
}

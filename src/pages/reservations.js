import React from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Flex from 'components/Flex';
import Banner from 'components/Banner';
import Button from 'components/Button';
import Link from 'components/Link';

import Widget from 'components/Reservations/Widget';

import { COLORS } from 'theme';

import bannerImg from '../../static/reservations.jpg';

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
  font-size: 48px;
  margin: 0px 0px 48px 0px;

  text-transform: uppercase;
`;

export default function Reservations() {
  return (
    <Layout>
      <Banner img={bannerImg}>Reservations</Banner>

      <Widget />

      <FullWidthContent column center centerVert>
        <Title>Checkout our menu</Title>
        <Link to="/menu">
          <LinkButton highlight>View Our Menu</LinkButton>
        </Link>
      </FullWidthContent>
    </Layout>
  );
}

import React from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Banner from 'components/Banner';
import Flex from 'components/Flex';
import Button from 'components/Button';

import { COLORS } from 'theme';
import menu from '../../static/menus/Brunch.pdf';

import CONFIG from 'config/Menu';

const Wrapper = styled(Flex)`
  margin: 48px;
  padding: 24px;
  border-radius: 2px;
  background: ${COLORS.PRIMARY};
`;

const Text = styled.p`
  color: ${COLORS.WHITE};
  max-width: 600px;
  text-align: center;
  margin: 24px 36px;
`;

const MenuButton = styled(Button)`
  padding: 20px 0px;
  margin: 20px 0px;
  min-width: 200px;
`;

export default function Menu() {
  return (
    <Layout>
      <Banner img={CONFIG.bannerImg}>{CONFIG.title}</Banner>

      <Wrapper column center centerVert>
        <Text>{CONFIG.text}</Text>

        <a href={menu}>
          <MenuButton highlight>Menu</MenuButton>
        </a>

        <a href={menu}>
          <MenuButton highlight>Bar</MenuButton>
        </a>

        <a href={menu}>
          <MenuButton highlight>Dessert</MenuButton>
        </a>
      </Wrapper>
    </Layout>
  );
}

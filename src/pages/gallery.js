import React from 'react';
import styled from 'styled-components';
import { Gallery } from 'gatsby-theme-gallery';

import Layout from 'components/Layout';
import Flex from 'components/Flex';

import { COLORS } from 'theme';

const Wrapper = styled(Flex)`
  margin: 24px;
`;

const Title = styled.h2`
  padding: 24px;
  font-size: 36px;
  color: ${COLORS.BLACK};
  text-transform: uppercase;
`;

export default function GalleryView() {
  return (
    <Layout>
      <Wrapper column>
        <Flex center centerVert>
          <Title>Gallery</Title>
        </Flex>
        <Gallery />
      </Wrapper>
    </Layout>
  );
}

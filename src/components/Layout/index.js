import React from 'react';
import styled from 'styled-components';

import GlobalStyles from 'theme/GlobalStyles';

import Flex from 'components/Flex';

import Header from './partials/Header';
import Footer from './partials/Footer';

/* Obscure margin to clear header */
const ContentWrapper = styled(Flex)`
  min-height: 100vh;
  margin-top: 103px;
`;

const Layout = ({ children }) => (
  <Flex column>
    <GlobalStyles />

    <Header />

    <ContentWrapper>{children}</ContentWrapper>

    <Footer />
  </Flex>
);

export default Layout;

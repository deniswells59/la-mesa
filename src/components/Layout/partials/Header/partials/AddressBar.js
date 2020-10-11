import React from 'react';
import styled from 'styled-components';
import { FiMapPin, FiPhone } from 'react-icons/fi';

import Flex from 'components/Flex';

import { COLORS } from 'theme';

const Wrapper = styled(Flex)`
  background: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  margin: 0px 10px;
  color: inherit;
  text-decoration: none;
`;

const iconStyles = {
  margin: '0px 8px',
};

const AddressBar = () => (
  <Wrapper>
    <Link href="https://goo.gl/maps/Qgk19KGiySMuXfnu6" target="_blank">
      <Flex centerVert>
        <FiMapPin color={COLORS.WHITE} size="16" style={iconStyles} />
        329 Lincoln Center, Stockton, CA
      </Flex>
    </Link>

    <Link href="tel:2093953818">
      <Flex centerVert>
        <FiPhone color={COLORS.WHITE} size="16" style={iconStyles} />
        209-395-3818
      </Flex>
    </Link>
  </Wrapper>
);

export default AddressBar;

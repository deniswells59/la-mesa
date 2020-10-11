import React, { Fragment } from 'react';
import styled from 'styled-components';

import Link from 'components/Link';
import { COLORS, TEXT } from 'theme';

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-items: center;

  color: ${COLORS.PRIMARY};
  font-family: ${TEXT.PRIMARY};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1px;

  &:hover {
    color: ${COLORS.PRIMARY_HOVER};
  }
`;

const NavItems = () => (
  <Fragment>
    {['menu', 'reservations', 'careers', 'gallery'].map((text) => (
      <Item key={text}>
        <Link to={`/${text}`}>{text}</Link>
      </Item>
    ))}
  </Fragment>
);

export default NavItems;

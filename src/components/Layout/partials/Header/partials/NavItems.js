import React, { Fragment } from 'react';
import styled from 'styled-components';

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
`;

const NavItems = () => (
  <Fragment>
    {['Home', 'Menu', 'Reservations', 'About', 'Careers', 'Gallery'].map((text) => (
      <Item key={text}>{text}</Item>
    ))}
  </Fragment>
);

export default NavItems;

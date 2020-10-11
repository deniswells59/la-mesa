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

const ExternalLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const HighlightLink = styled.a`
  text-decoration: none;

  background: ${COLORS.HIGHLIGHT};
  color: ${COLORS.WHITE};
  padding: 12px;
  font-weight: 100;
`;

const NavItems = () => (
  <Fragment>
    {['menu', 'reservations', 'careers', 'gallery'].map((text) => (
      <Item key={text}>
        <Link to={`/${text}`}>{text}</Link>
      </Item>
    ))}
    <Item>
      <ExternalLink
        target="_blank"
        href="https://www.toasttab.com/la-mesa-329-lincoln-center/giftcards"
      >
        Gift Cards
      </ExternalLink>
    </Item>

    <Item>
      <HighlightLink target="_blank" href="https://www.toasttab.com/la-mesa-329-lincoln-center/v3">
        Order Online
      </HighlightLink>
    </Item>
  </Fragment>
);

export default NavItems;

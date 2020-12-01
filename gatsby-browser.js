import React from 'react';
import { Helmet } from 'react-helmet';
import { IconContext } from 'react-icons';

import MobileDetectionProvider from 'providers/MobileDetectionProvider';

import { COLORS } from 'theme';

const iconStyles = {
  color: COLORS.PRIMARY,
  size: '24px',
};

export const wrapRootElement = ({ element }) => (
  <MobileDetectionProvider>
    <Helmet>
      <meta charSet="utf-8" />
      <title>La Mesa Stockton Restaurant</title>
    </Helmet>
    <IconContext.Provider value={iconStyles}>{element}</IconContext.Provider>
  </MobileDetectionProvider>
);

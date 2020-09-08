import React from 'react';
import { IconContext } from 'react-icons';

import MobileDetectionProvider from 'providers/MobileDetectionProvider';

import { COLORS } from 'theme';

const iconStyles = {
  color: COLORS.PRIMARY,
  size: '24px',
};

export const wrapRootElement = ({ element }) => (
  <MobileDetectionProvider>
    <IconContext.Provider value={iconStyles}>{element}</IconContext.Provider>
  </MobileDetectionProvider>
);

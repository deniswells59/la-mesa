import { createGlobalStyle } from 'styled-components';

import { COLORS, TEXT } from 'theme';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${COLORS.WHITE};
    background-color: ${COLORS.WHITE} !important;
    color: ${COLORS.BLACK} !important;
    font-family: ${TEXT.SECONDARY};
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
`;

export default GlobalStyles;

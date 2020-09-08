import { createGlobalStyle } from 'styled-components';

import { COLORS, TEXT } from 'theme';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${COLORS.WHITE};
    color: ${COLORS.BLACK};
    font-family: ${TEXT.montserrat};
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

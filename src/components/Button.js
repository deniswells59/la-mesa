import styled from 'styled-components';

import { COLORS, TEXT } from 'theme';

const Button = styled.button`
  background: ${COLORS.PRIMARY};
  max-width: 200px;
  min-height: 48px;
  border: 0;

  font-family: ${TEXT.PRIMARY};
  color: ${COLORS.WHITE};
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
    background: #364d6b;
  }
`;

export default Button;

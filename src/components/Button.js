import styled from 'styled-components';

import { COLORS, TEXT } from 'theme';

const Button = styled.button`
  background: ${(props) => (props.highlight ? COLORS.HIGHLIGHT : COLORS.PRIMARY)};
  max-width: 200px;
  min-height: 48px;
  border: 0;

  font-family: ${TEXT.PRIMARY};
  color: ${COLORS.WHITE};
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;

  cursor: pointer;

  &:hover {
    background: ${(props) => (props.highlight ? COLORS.HIGHLIGHT_HOVER : COLORS.PRIMARY_HOVER)};
  }

  ${(props) => props.disabled && `background: #5e8583c9;`};
`;

export default Button;

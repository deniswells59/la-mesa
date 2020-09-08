import styled from 'styled-components';

import Flex from 'components/Flex';

import { COLORS } from 'theme';

const AddressBar = styled(Flex)`
  background: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export default AddressBar;

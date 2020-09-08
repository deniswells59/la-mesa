import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: ${(props) => (props.center ? 'center' : 'normal')};
  align-items: ${(props) => (props.centerVert ? 'center' : 'normal')};
`;

export default Flex;

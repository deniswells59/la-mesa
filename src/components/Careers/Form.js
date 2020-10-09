import React, { useState } from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';
import Button from 'components/Button';

import { TEXT } from 'theme';

const Wrapper = styled(Flex)`
  margin: 24px 0px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  max-width: 600px;
`;

const Input = styled.input`
  margin: 12px 0px;
  padding: 4px;
  font-size: 24px;
  font-family: ${TEXT.PRIMARY};
  width: 100%;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  max-width: 600px;
  margin: 24px;
`;

const Form = () => {
  const [formState, setFormState] = useState({});

  return (
    <Wrapper center centerVert>
      <FormWrapper column center>
        <Input placeholder="Name" type="text" max="80" required />
        <Input placeholder="Email" type="email" max="180" required />
        <Input placeholder="Phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
        <SubmitButton highlight type="submit">
          Submit
        </SubmitButton>
      </FormWrapper>
    </Wrapper>
  );
};

export default Form;

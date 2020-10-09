import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
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
  const [disabledForm, setDisabledForm] = useState(false);

  useEffect(() => {
    emailjs.init('user_9J2pDLIAUHuE1fvmWUS99');
  }, []);

  const onInputChange = (event, name) => {
    setFormState({ ...formState, [name]: event.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (disabledForm) return;
    setDisabledForm(true);

    emailjs.send('postmark', 'template_qm1pq9d', formState);
  };

  return (
    <Wrapper center centerVert>
      <FormWrapper onSubmit={sendEmail}>
        <Input
          placeholder="Name"
          type="text"
          max="80"
          required
          onChange={(e) => onInputChange(e, 'name')}
        />
        <Input
          placeholder="Email"
          type="email"
          max="180"
          required
          onChange={(e) => onInputChange(e, 'email')}
        />
        <Input
          placeholder="Phone"
          type="tel"
          max="16"
          required
          onChange={(e) => onInputChange(e, 'phone')}
        />

        <SubmitButton disabled={disabledForm} highlight type="submit">
          {disabledForm ? 'Sent!' : 'Submit'}
        </SubmitButton>
      </FormWrapper>
    </Wrapper>
  );
};

export default Form;

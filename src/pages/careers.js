import React from 'react';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Banner from 'components/Banner';
import Form from 'components/Careers/Form';

import CONFIG from 'config/Careers';

const Text = styled.p`
  text-align: center;
  max-width: 600px;

  padding: 0px 16px;
  margin: 36px auto;
`;

export default function Careers() {
  return (
    <Layout>
      <Banner img={CONFIG.bannerImg}>{CONFIG.title}</Banner>
      <Text>{CONFIG.text}</Text>
      <Form />
    </Layout>
  );
}

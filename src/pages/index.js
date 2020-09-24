import React from 'react';

import Layout from 'components/Layout';

import Banner from 'components/Home/Banner';
import BoxLink from 'components/Home/BoxLink';

import CONFIG from 'config/Home';

export default function Home() {
  return (
    <Layout>
      <Banner />

      <BoxLink
        img={CONFIG.SECTION_1.img}
        copy={CONFIG.SECTION_1.text}
        buttonText={CONFIG.SECTION_1.button}
      />

      <BoxLink
        inverse
        img={CONFIG.SECTION_2.img}
        copy={CONFIG.SECTION_2.text}
        buttonText={CONFIG.SECTION_2.button}
      />
    </Layout>
  );
}

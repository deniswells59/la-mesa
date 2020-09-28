import React from 'react';

import Layout from 'components/Layout';
import Banner from 'components/Banner';

import bannerImg from '../../static/reservations.jpg';

export default function Reservations() {
  return (
    <Layout>
      <Banner img={bannerImg}>Reservations</Banner>
    </Layout>
  );
}

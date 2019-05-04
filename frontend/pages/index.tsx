import React from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(
  () => import('../components/map'),
  {
    ssr: false
  }
);

const Homepage = () => (
  <div>
    <Map />
  </div>
);

export default Homepage;

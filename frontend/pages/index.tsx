import dynamic from "next/dynamic";
import React from "react";

const Map = dynamic(
  () => import("../components/map"),
  {
    ssr: false,
  },
);

const Homepage = () => (
  <div>
    <Map />
  </div>
);

export default Homepage;

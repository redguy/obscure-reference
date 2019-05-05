import dynamic from "next/dynamic";
import React from "react";

const Wizard = dynamic(
  () => import("../components/wizard/Wizard.component"),
  {
    ssr: false,
  },
);

const Homepage = () => <Wizard />;

export default Homepage;

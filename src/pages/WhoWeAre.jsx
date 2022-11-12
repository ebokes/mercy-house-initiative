import React from "react";
import OurImpact from "../components/OurImpact";
import ScrollGallery from "../components/ScrollGallery";
import WhatWeDoIntro from "../components/WhatWeDoIntro";
import WhoWeAreIntro from "../components/WhoWeAreInto";

const WhoWeAre = () => {
  return (
    <>
      <WhoWeAreIntro />
      <WhatWeDoIntro />
      <OurImpact />
      <ScrollGallery />
    </>
  );
};

export default WhoWeAre;

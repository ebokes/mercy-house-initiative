import React from "react";
import map from "../assets/World Map.svg";
// import { ImLocation } from "react-icons/im";

const OurImpact = () => {
  return (
    <section className="flex py-16">
      <div className="lg:flex mx-auto items-center max-w-7xl lg:my-[70px] px-5 space-x-5">
        <div className="lg:w-[50%]">
          <h3 className="text-color1 font-semibold text-2xl lg:text-3xl">
            OUR IMPACT
          </h3>
          <h2 className="font-semibold text-4xl md:text-5xl lg:text-6xl my-4">
            Where We've Made an Impact
          </h2>
          <p className="font-semibold">
            This is a subtext for the copy text, It's supposed to be many but I
            don't know what to write here I thought about using lorem Ipsum but
            I could not bring my self to do that. But wow check this out there
            are a lot of words already. I feel like going on but I'm exhausted
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-[50%] bg-no-repeat bg-contain bg-map">
          {/* <ImLocation className="absolute top-[145px] left-[260px] text-3xl text-color1" />
          <ImLocation className="absolute top-[115px] left-[440px] text-3xl text-color1" /> */}
          <img className="relative" src={map} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurImpact;

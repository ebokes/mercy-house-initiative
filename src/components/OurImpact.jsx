import React from "react";
import map from "../assets/World Map.svg";

const OurImpact = () => {
  return (
    <section className="flex">
      <div className="lg:flex mx-auto items-center max-w-7xl my-[70px] px-5">
        <div className="lg:w-[50%]">
          <h3 className="text-color1 font-semibold text-3xl">OUR IMPACT</h3>
          <h2 className="font-semibold text-6xl my-4">
            Where We've Made an Impact
          </h2>
          <p className="font-semibold">
            This is a subtext for the copy text, It's supposed to be many but I
            don't know what to write here I thought about using lorem Ipsum but
            I could not bring my self to do that. But wow check this out there
            are a lot of words already. I feel like going on but I'm exhausted
          </p>
        </div>
        <div className="lg:w-[50%] bg-no-repeat bg-contain ">
          <img src={map} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurImpact;

import React from "react";
import { Link } from "react-router-dom";

const WhatWeDoIntro = () => {
  return (
    <section className="lg:flex justify-between h-80 space-x-9 mb-[200px] mx-auto">
      <div className="h-full  lg:w-[50%] bg-cover bg-no-repeat bg-medic bg-center"></div>
      <div className="lg:w-[50%] bg-gradient-to-t from-white to-white">
        <div className="lg:max-w-[600px] pr-5">
          <h2 className="text-[52px] font-semibold">What we do</h2>
          <p className="mb-4">
            As a faith based organization, we attend to the needs of the total
            man. This we do by Youth empowerment and Capacity building:
          </p>
          <p>
            - We help young people maximize their youth by teaching them to
            delay gratification and make sound and well informed decisions.
          </p>
          <Link
            className="bg-color1 text-white px-3 py-2 inline-block mt-8"
            to="/whatwedo"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoIntro;

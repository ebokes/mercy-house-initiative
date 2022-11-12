import React from "react";
import { Link } from "react-router-dom";

const WhatWeDoIntro = () => {
  return (
    <section className="lg:flex justify-between  mx-auto">
      <div className="lg:w-[50%] bg-cover bg-no-repeat bg-medic bg-center">
        <p className="text-3xl text-transparent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam
          similique libero officia veniam, tempora sed accusantium optio quis
          dicta. Ipsa voluptatem velit tenetur voluptatibus temporibus eum est,
          nihil maxime atque, magnam veritatis, dignissimos inventore id
          perferendis! Odio, vitae, consequatur dolores, nostrum impedit ad ab
          doloribus
        </p>
      </div>
      <div className="lg:w-[50%] bg-gradient-to-t from-gray-100 to-gray-100 p-8 pl-8 pb-[60px]">
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

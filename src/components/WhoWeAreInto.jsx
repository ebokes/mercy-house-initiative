import React from "react";
// import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhoWeAreIntro = () => {
  // const NextArrow = ({ onClick }) => {
  //   return (
  //     <div onClick={onClick}>
  //       <FaAngleRight className="icons" />
  //     </div>
  //   );
  // };

  // const PrevArrow = ({ onClick }) => {
  //   return (
  //     <div onClick={onClick}>
  //       <FaAngleLeft className="icons" />
  //     </div>
  //   );
  // };

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    initialSlide: 0,
    autoplaySpeed: 7000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className=" mx-auto ">
      <Slider {...settings}>
        {/* <div>Who we are</div> */}
        <div className="hero-bg bg-[url('/src/assets/bg1.webp')]">
          <div className="hero-center-text">
            <h1 className="text-7xl font-medium">THIS IS A COPY TEXT</h1>
            <hr />
            <p>
              This is a subtext for the copy text, It's supposed to be many but
              I don't know what to write here I thought about using lorem Ipsum
              but I could not bring my self to do that. But wow check this out
              there are a lot of words already. I feel like going on but I'm
              exhausted
            </p>
          </div>
        </div>
        <div className="bg-[url('/src/assets/bg2.webp')]  hero-bg">
          <div className="hero-center-text">
            <h1 className="text-7xl font-medium">THIS IS THE 2ND COPY TEXT</h1>
            <hr />
            <p>
              This is a subtext for the copy text, It's supposed to be many but
              I don't know what to write here I thought about using lorem Ipsum
              but I could not bring my self to do that. But wow check this out
              there are a lot of words already. I feel like going on but I'm
              exhausted
            </p>
          </div>
        </div>
        <div className="bg-[url('/src/assets/bg3.webp')]  hero-bg">
          <div className="hero-center-text">
            <h1 className="text-7xl font-medium">THIS IS THE 3RD COPY TEXT</h1>
            <hr />
            <p>
              This is a subtext for the copy text, It's supposed to be many but
              I don't know what to write here I thought about using lorem Ipsum
              but I could not bring my self to do that. But wow check this out
              there are a lot of words already. I feel like going on but I'm
              exhausted
            </p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default WhoWeAreIntro;

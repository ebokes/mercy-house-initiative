import React from "react";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhoWeAreIntro = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <button className="arrow z-[9] right-10 absolute" onClick={onClick}>
        <IoChevronForwardCircle className="arrow2" />
      </button>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <button className="arrow z-[9] left-10 absolute" onClick={onClick}>
        <IoChevronBackCircle className="arrow2" />
      </button>
    );
  };

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    dotsClass: "slick-dots slick-thumb",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className=" mx-auto relative">
      <Slider {...settings}>
        {/* <div>Who we are</div> */}
        <div className="hero-bg bg-bg1">
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
        <div className="bg-bg2 hero-bg">
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
        <div className="bg-bg3 hero-bg">
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
        <div className="bg-bg4 hero-bg">
          <div className="hero-center-text">
            <h1 className="text-7xl font-medium">THIS IS THE 4TH COPY TEXT</h1>
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

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scrollData from "../data/scrollGalleryData";

const ScrollGallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    centerPadding: 50,
    // focusOnSelect: true,
    initialSlide: 0,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-[#04301d] py-6 px-3 lg:px-5">
      <Slider {...settings}>
        {scrollData.map((item) => (
          <div
            key={item.img}
            className=" mx-3 border-[#04301d] border-[7px] md:border-[17px] lg:border-[37px]"
          >
            <img
              className="w-full lg:w-full rounded-lg"
              src={item.img}
              alt="img"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ScrollGallery;

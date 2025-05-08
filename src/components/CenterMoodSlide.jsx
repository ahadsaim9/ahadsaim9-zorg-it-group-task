import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image_1 from "/images/image-s1.png";
import image_2 from "/images/image-s2.png";
import image_3 from "/images/image-s3.png";
import React from "react";
import Slider from "react-slick";

const CenterModeSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 500,
    responsive: [
      /* *************** Tablet Device *************** */

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      /* *************** Mobile Device *************** */

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [image_1, image_2, image_3, image_1, image_2];

  return (
    <div className="slider-container max-w-[1440px] mx-auto ">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <div className="lg:h-[306px] lg:w-[457px] ">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl select-none"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CenterModeSlide;

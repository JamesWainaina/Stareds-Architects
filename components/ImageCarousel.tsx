"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Add this line
import "slick-carousel/slick/slick-theme.css"; // Add this line

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 5 seconds as per your requirement
    arrows: true,
  };

  const images = ["/icons/3d1.png", "/icons/3d2.png", "/icons/3d3.png", "icons/3d4.png"];

  return (
    <div className="w-full h-48 tran">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`3D Visual ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;

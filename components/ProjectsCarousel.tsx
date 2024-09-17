"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// Custom Previous Arrow Component
const CustomPrevArrow = ({ className, onClick }) => (
  <div
    className={`${className} z-20 absolute top-1/2 transform -translate-y-1/2 left-4 bg-blue-500 hover:bg-blue-700 rounded-full p-2 cursor-pointer`}
    onClick={onClick}
    style={{ zIndex: 2 }} // Ensure it's on top of the slider content
  >
    <HiChevronLeft className="w-6 h-6 text-white" />
  </div>
);

// Custom Next Arrow Component
const CustomNextArrow = ({ className, onClick }) => (
  <div
    className={`${className} z-20 absolute top-1/2 transform -translate-y-1/2 right-4 bg-blue-500 hover:bg-blue-700 rounded-full p-2 cursor-pointer`}
    onClick={onClick}
    style={{ zIndex: 2 }} // Ensure it's on top of the slider content
  >
    <HiChevronRight className="w-6 h-6 text-white" />
  </div>
);

const ProjectsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds between slides
    arrows: true, // Enable arrow navigation
    prevArrow: <CustomPrevArrow />, // Custom previous arrow component
    nextArrow: <CustomNextArrow />, // Custom next arrow component
  };

  // Project data
  const projects = [
    {
      title: "Luxury Residential Home",
      image: "/icons/project1.png", // Replace with your project image paths
      description:
        "A stunning residential property featuring eco-friendly designs and state-of-the-art architecture.",
    },
    {
      title: "Corporate Office Complex",
      image: "/icons/project2.png", // Replace with your project image paths
      description:
        "A modern office building designed to enhance productivity and collaboration.",
    },
    {
      title: "Shopping Mall",
      image: "/icons/project3.png", // Replace with your project image paths
      description:
        "A grand commercial complex offering a mix of retail, entertainment, and dining options.",
    },
  ];

  return (
    <div className="relative w-full h-96">
      {" "}
      {/* Ensure relative positioning for arrow placement */}
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="p-4">
            <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsCarousel;

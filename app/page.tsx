"use client";

import ImageCarousel from "@/components/ImageCarousel";
import Navbar from "@/components/Navbar";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Trigger animation when component mounts
  }, []);

  return (
    <div>
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col lg:flex-row items-center bg-blue-900"
      >
        {/* Left Section with Image */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? "lg:w-1/2 w-full" : "w-0"
          } h-1/2 lg:h-full bg-cover bg-center`}
          style={{ backgroundImage: "url('/icons/profile.png')" }}
        ></div>

        {/* Right Section with Text */}
        <div
          className="lg:w-1/2 w-full h-1/2 lg:h-full flex flex-col items-start 
          justify-center px-6 lg:px-12 text-white text-center lg:text-left"
        >
          <h1 className="text-4xl font-bold mb-4">Stareds Architects</h1>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
            Let's make your vision come to life
          </h2>
          {/* Smooth scrolling to #about section */}
          <a
            href="#about"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="h-screen bg-gray-200 flex flex-col items-center justify-center px-12"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-semibold mb-6">About Us</h2>
          <p className="text-lg mb-4">
            At Stareds Architects, we are committed to sustainable design
            practices. We believe in creating environmentally friendly,
            energy-efficient spaces that not only reduce carbon footprints but
            also contribute to the well-being of future generations. Our
            projects are designed with sustainability in mind, incorporating the
            latest green technologies, materials, and practices to ensure that
            they are built for longevity.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="h-screen bg-blue-900 text-white px-8 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6 text-center">
            Our Services
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Write a paragraph that talks about your construction company here.
            Convince your prospective clients to choose you and your team for
            their construction needs by talking about your unique services, as
            well as your commitment to getting the job done.
          </p>

          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/icons/residential.png"
                  alt="Residential Spaces"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold mb-2">Residential Spaces</h3>
                  <p>
                    Residential spaces that blend design with functionality,
                    delivering comfort and style.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Carousel for 3D Visuals */}
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
                <ImageCarousel />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold mb-2 mt-3">3D VISUALS</h3>
                  <p>
                    High-quality 3D visuals designed to showcase commercial
                    buildings with detailed representations.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/path-to-your-image-2.jpg"
                  alt="Commercial Buildings"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold mb-2">Interior Designs</h3>
                  <p>
                    Interior designs that elevate spaces with a blend of
                    aesthetics and functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      {/* Projects Section */}
      <section
        id="projects"
        className="h-screen bg-gray-100 text-gray-900 px-8 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6 text-center">
            Our Projects
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Here are some of the landmark projects we have successfully
            completed. Each project demonstrates our commitment to quality,
            innovation, and sustainability.
          </p>

          {/* Projects Carousel */}
          <ProjectsCarousel />
        </div>
      </section>
    </div>
  );
};

export default HomePage;

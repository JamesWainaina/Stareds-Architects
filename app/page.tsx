"use client"; // Add this at the very top

import Navbar from "@/components/Navbar";
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
          style={{ backgroundImage: "url('/icons/home.jpg')" }}
        ></div>

        {/* Right Section with Text */}
        <div
          className="lg:w-1/2 w-full h-1/2 lg:h-full flex flex-col items-start justify-center px-6 lg:px-12
         text-white text-center lg:text-left"
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

      <section
        id="about"
        className="h-screen bg-gray-200 flex flex-col items-center justify-center px-12"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-semibold mb-6">About Us</h2>

          {/* Commitment to Sustainability */}
          <p className="text-lg mb-4">
            At Stareds Architects, we are committed to sustainable design
            practices. We believe in creating environmentally friendly,
            energy-efficient spaces that not only reduce carbon footprints but
            also contribute to the well-being of future generations. Our
            projects are designed with sustainability in mind, incorporating the
            latest green technologies, materials, and practices to ensure that
            they are built for longevity.
          </p>

          {/* Collaborative Approach */}
          <p className="text-lg mb-4">
            Collaboration lies at the heart of everything we do. From the
            initial concept to the final blueprint, we work closely with our
            clients, listening to their needs and understanding their vision. We
            also collaborate with engineers, interior designers, and other
            professionals to ensure that every detail is executed to perfection.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="h-screen bg-gray-300 flex items-center justify-center px-4"
      >
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-4">Our Services</h2>
          <p className="text-lg max-w-2xl mx-auto">
            We offer a range of architectural services, including residential,
            commercial, and landscape architecture. Our team works closely with
            clients to ensure every detail is meticulously planned and executed.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen bg-gray-400 flex items-center justify-center px-4"
      >
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us today and let's
            discuss how we can turn your ideas into reality.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;


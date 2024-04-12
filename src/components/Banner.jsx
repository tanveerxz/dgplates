import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { bg, bg2, bg3 } from '../assets';
import { Link } from 'react-router-dom';
import './nav.css'

const Banner = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgroundImages = [bg, bg2, bg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentBgIndex]); // Restart interval whenever currentBgIndex changes

  const handlePrev = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const handleNext = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-50">
        {/* Your Navbar Component Goes Here */}
      </div>

      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {/* Banner */}
        <div className="flex-1 relative">
          <div className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`} style={{ backgroundImage: `url(${backgroundImages[currentBgIndex]})`, backgroundSize: 'contain', backgroundPosition: 'center', transition: 'background-image 1s ease-in-out' }}>
            <div className="flex flex-col justify-center items-center mt-5">
              {/* Your other content goes here */}
            </div>
          </div>

          <div className="absolute bottom-5 inset-x-0 flex justify-center items-center z-10">
            {backgroundImages.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentBgIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${currentBgIndex === index ? 'bg-white' : 'bg-gray-500'}`}
              ></span>
            ))}
          </div>

          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
            <span onClick={handlePrev} className="text-white text-4xl">&#10094;</span>
          </div>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
            <span onClick={handleNext} className="text-white text-4xl">&#10095;</span>
          </div>
        </div>

        {/* Other content */}
        <div className="absolute bottom-10 inset-x-0 flex justify-center items-center z-10">
          <a href='#showcase'>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px rgba(255, 255, 0, 0.5)' }}
              className="button"
            >
              Explore Our Products
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React, { useState } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://img.freepik.com/premium-photo/hamburger-with-cheese-hamburger-it_483861-16821.jpg?w=740",
    "https://img.freepik.com/premium-photo/delicious-burger_1295442-33.jpg?w=740",
    "https://img.freepik.com/premium-photo/spicy-gourmet-burger-with-fiery-background-perfect-hot-food-lovers-gourmet-cheeseburger-with-it_1299527-79.jpg?w=740"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ 
          transform: `translateX(-${currentSlide * 100}%)`,
          height: '80vh', // Adjust this value to change the height
          minHeight: '300px', // Minimum height for very small screens
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay */}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl bg-opacity-75 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl bg-opacity-75 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

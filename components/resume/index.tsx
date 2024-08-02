'use cilent'
import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, interval);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className='relative'>
    <div className="image-carousel absolute bottom-40 right-2/4 z-10 transition-transform duration-500 ease-in-out">
    {/* <div
        className={`image-carousel absolute bottom-40 right-2/4 z-10 transition-transform duration-500 ease-in-out ${
            currentIndex ? 'translate-x-0' : 'translate-x-full'
        }`}
      > */}
      <img src={images[currentIndex]} alt="Carousel" style={{ transform: 'rotate(350deg)', width: '200px', height: 'auto' }} />
    </div>
    </div>
  );
};

export default ImageCarousel;
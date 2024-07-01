import  { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './recommendimage.css';

const RecommendDetailPage = ({ images, instagramLink }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="rci-slider-container">
      <div className="rci-slider" ref={sliderRef} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="rci-slider-image-container">
            <img src={img} alt={`Slide ${index}`} className="rci-slider-image" />
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="rci-instagram-button">Instagram</a>
          </div>
        ))}
      </div>
      <button className="rci-prev-button" onClick={goToPrevSlide}>&#10094;</button>
      <button className="rci-next-button" onClick={goToNextSlide}>&#10095;</button>
    </div>
  );
};

RecommendDetailPage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  instagramLink: PropTypes.string.isRequired
};

export default RecommendDetailPage;

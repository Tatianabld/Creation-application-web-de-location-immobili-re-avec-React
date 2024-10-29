import React, { useState } from 'react';
import PropTypes from 'prop-types'
import arrowLeft from '../../assets/fleche-gauche.png';
import arrowRight from '../../assets/fleche-droite.png';

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestion des flèches
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slideshow">
      {/* Affichage de l'image actuelle */}
      <div
        className="slide"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Flèches pour changer d'image */}
      {images.length > 1 && (
        <div className="arrows">
          <img className="left-arrow" src={arrowLeft} alt="flèche gauche" onClick={goToPrevious}/>
          <img className="right-arrow" src={arrowRight} alt="flèche droite" onClick={goToNext}/>
        </div>
      )}

      {/* Affichage de l'index actuel et du nombre total d'images */}
      {images.length > 1 && (
        <div className="counter">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
}

Slideshow.propTypes = {
  images: PropTypes.array.isRequired, // Spécifiez que 'images' est un tableau requis
};

export default Slideshow;

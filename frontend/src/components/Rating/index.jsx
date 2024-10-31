import React from 'react';
import PropTypes from 'prop-types';
import redStar from '../../assets/Vector.png'
import greyStar from '../../assets/Vector (1).png';

function Rating({ rating }) {
    const maxStars = 5; 
    const stars = [];

    
    for (let i = 0; i < maxStars; i++) {
        if (i < rating) {
            stars.push(<img key={`red-${i}`} src={redStar} alt="évaluation étoile rouge" />);
        } 
        else {
            stars.push(<img key={`grey-${i}`} src={greyStar} alt="évaluation étoile grise" />);
        }
    }

    return (
        <div className="property-rating">
            {stars}
        </div>
    );
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired, 
};

export default Rating;
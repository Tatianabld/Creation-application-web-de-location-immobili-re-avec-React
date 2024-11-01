import React from 'react';
import PropTypes from 'prop-types'; 

function Banner({ imageSrc, altText, title }) {
    return (
        <div className="banner">
            <img src={imageSrc} alt={altText} />
            {title ? <h1>{title}</h1> : ""}
        </div>
    );
}

Banner.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Banner;
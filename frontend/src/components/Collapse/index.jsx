import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import fleche from '../../assets/fleche.png';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false); // Etat pour ouvrir/fermer le collapse

  const toggleCollapse = () => {
    setIsOpen(!isOpen);  // Inverser l'état
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img 
          src={fleche} 
          alt="Chevron" 
          className={isOpen ? "rotate" : ""} 
        />
      </div>

      {isOpen && (
        <div className="collapse-content">
          {children} {/* Contenu qui est passé en tant qu'enfant au composant*/}
        </div>
      )}
    </div>
  );
}

// Définir les PropTypes pour le composant Collapse
Collapse.propTypes = {
  title: PropTypes.string.isRequired, // title est une chaîne de caractères requise
  children: PropTypes.node.isRequired, // children peut être tout élément React
};

export default Collapse;

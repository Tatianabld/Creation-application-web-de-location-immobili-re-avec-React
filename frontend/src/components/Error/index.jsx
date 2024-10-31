import React from 'react';
import { NavLink } from 'react-router-dom';


function Error() {
    return (
      <div className="error">
        <div className="error-code">
          <p>404</p>
        </div>
        <div className="error-message">
        <p>Oups! La page que <span className="break-line">vous demandez n'existe pas.</span></p>
        </div>
        <div className="error-link">
          <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
      </div>
    );
  }
  
  export default Error;

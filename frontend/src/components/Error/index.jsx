import React from 'react';
import { Link } from 'react-router-dom';


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
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </div>
    );
  }
  
  export default Error;

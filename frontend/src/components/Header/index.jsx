import React from 'react';
import { NavLink } from 'react-router-dom'
import logoKasa from '../../assets/LOGO.png'

function Header() {
    return (
      <header>
        <div className="logo">
          <NavLink to="/">
            <img src={logoKasa} alt="KASA_logo" />
          </NavLink>
        </div>
        <nav>
            <ul>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")}>
              <li>À propos</li>
            </NavLink>
            </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
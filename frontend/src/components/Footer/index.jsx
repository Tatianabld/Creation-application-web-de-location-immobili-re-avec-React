import React from 'react'
import { Link } from 'react-router-dom'
import footerLogoKasa from '../../assets/footerLOGO.png'

function Footer() {
    return (
        <footer>
            <div className="footerLogo">
                <Link to="/">
                    <img src={footerLogoKasa} alt="KASA_logo" />
                </Link>
            </div>
            <p> © 2020 Kasa. All <span className="break-line">rights reserved </span></p>
        </footer>
    )
  }
  
  export default Footer
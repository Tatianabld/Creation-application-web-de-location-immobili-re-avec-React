import React from 'react'
import { NavLink } from 'react-router-dom'
import footerLogoKasa from '../../assets/footerLOGO.png'

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footerLogo">
                    <NavLink to="/">
                        <img src={footerLogoKasa} alt="KASA_logo" />
                    </NavLink>
                </div>
                <p>© 2020 Kasa. All <span className="break-line">rights reserved</span></p>
            </div>
        </footer>
    )
}

export default Footer
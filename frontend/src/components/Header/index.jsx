import { Link } from 'react-router-dom'
import logoKasa from '../../assets/LOGO.png'

function Header() {
    return (
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logoKasa} alt="KASA_logo" />
          </Link>
        </div>
        <nav>
            <ul>
                <Link to="/"> <li> Accueil </li></Link>
                <Link to="/About"><li> A propos </li></Link>
            </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
import { useState } from "react";
import "./styles.css";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const [isHeaderMobileMenuOpen, setIsHeaderMobileMenuOpen] = useState(false);

  function toggleMobileMenuState() {
    setIsHeaderMobileMenuOpen(!isHeaderMobileMenuOpen);
  }

  function mobileHeader() {
    return isHeaderMobileMenuOpen ? (
      <div className="mobile-menu-open">
        <div className="mobile-menu-wrapper">
          <div className="header-branding">
            <Link to="/" className="header-logo">
              <img src={logo} alt="Logo" />
            </Link>
            <button onClick={toggleMobileMenuState} className="hamburger">
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>

        <div>
          <Link to="/" className="header-link">
            <h2>Página Inicial</h2>
          </Link>
          <Link to="/courses" className="header-link">
            <h2>Cursos</h2>
          </Link>
        </div>
      </div>
    ) : null;
  }

  return (
    <header className="landing-header">
      {mobileHeader()}
      <nav className="header-wrapper">
        <div className="header-branding">
          <Link to="/" className="header-logo">
            <img src={logo} alt="Logo" />
          </Link>

          <button onClick={toggleMobileMenuState} className="hamburger">
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>

        <div className="header-menu">
          <Link to="/" className="header-link">
            <h3>Página Inicial</h3>
          </Link>
          <Link to="/courses" className="header-link">
            <h3>Cursos</h3>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

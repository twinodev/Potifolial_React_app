import { useState } from 'react';
import Logo from './assets/logo.png';

function Header() {
    const shopname = "TwinoDev";
    const tagline = "Real Time Solutions To Real Life Problems";
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

  return (
    <>
    <header className='header'>
        <img src={Logo} alt="Logo" className="logo" />
        <div className="shop-info">
            <h1 className="shop-name">{shopname}</h1>
            <p className="tagline">{tagline}</p>
        </div>
        
        {/* Desktop Menu */}
        <div className="menu">
            <ul className="options">
                <a href="public/index.html">Home</a>
                <a href="#">Projects</a>
                <a href="#">Services</a>
                <a href="#">About</a>
                <a href="#">Contacts</a>
            </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>

        {/* Mobile Menu - only render when menuOpen is true */}
        {menuOpen && (
            <div className="mobile-menu active">
                <a href="public/index.html" onClick={closeMenu}>Home</a>
                <a href="#" onClick={closeMenu}>Projects</a>
                <a href="#" onClick={closeMenu}>Services</a>
                <a href="#" onClick={closeMenu}>About</a>
                <a href="#" onClick={closeMenu}>Contacts</a>
            </div>
        )}
    
    </header>
    </>
    
  );
}
export default Header;
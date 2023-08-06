import React, { useState } from 'react';
import LogoImage from '../assets/Logo.png';
import HamburgerNav from '../assets/hamburger-menu.png';
import '../components/Nav.css';
import MobileNavOverlay from './MobileNavOverlay';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
        <nav>
            <div className="nav-img-hamburger-container">
              <img
                className='nav-logo'
                src={LogoImage}
                alt="Navigation Logo"
                />
              <img
                className='hamburger'
                src={HamburgerNav}
                alt="Hamburger Icon"
                onClick={toggleMenu}
              />
            </div>
            <ul className='nav-ul'>
                <li className='nav-li'><a href='/'>Home</a></li>
                <li className='nav-li'><a href='/'>About</a></li>
                <li className='nav-li'><a href='/'>Reservations</a></li>
                <li className='nav-li'><a href='/'>Order Online</a></li>
                <li className='nav-li'><a href='/'>Login</a></li>
            </ul>
        </nav>
        {menuOpen && <MobileNavOverlay onClose={toggleMenu}/>}
    </>
    )
  }

export default Nav;
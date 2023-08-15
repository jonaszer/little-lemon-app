import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/Logo.png';
import HamburgerNav from '../assets/hamburger-menu.png';
import '../components/css/Nav.css';
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
                <li className='nav-li'><Link to="/" >Home</Link></li>
                <li className='nav-li'><Link to="/" >About</Link></li>
                <li className='nav-li'><Link to="/reservations" >Reservations</Link></li>
                <li className='nav-li'><Link to="/" >Order Online</Link></li>
                <li className='nav-li'><Link to="/" >Login</Link></li>
            </ul>
        </nav>
        {menuOpen && <MobileNavOverlay onClose={toggleMenu}/>}
    </>
    )
  }

export default Nav;
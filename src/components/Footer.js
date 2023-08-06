import React from 'react';
import FooterLogo from '../assets/FooterLogoGrey.png';
import '../components/css/Footer.css';

function Footer() {
  return (
    <>
        <footer>
            <div className="footer-logo-container">
                <img className='footer-logo' src={FooterLogo} alt="Footer logo"/>
            </div>
                <div className='footer-columns-wrapper'>
                    <div className='footer-column'>
                        <h3>Doormat Navigation</h3>
                        <ul className='footer-ul'>
                            <li className='footer-li'><a href='/'>Home</a></li>
                            <li className='footer-li'><a href='/'>About</a></li>
                            <li className='footer-li'><a href='/'>Menu</a></li>
                            <li className='footer-li'><a href='/'>Reservations</a></li>
                            <li className='footer-li'><a href='/'>Order Online</a></li>
                            <li className='footer-li'><a href='/'>Login</a></li>
                        </ul>
                    </div>
                    <div className='footer-column'>
                        <h3>Contact</h3>
                        <ul className='footer-ul'>
                            <li className='footer-li'><a href='/'>Address</a></li>
                            <li className='footer-li'><a href='/'>Phone Number</a></li>
                            <li className='footer-li'><a href='/'>Email</a></li>
                        </ul>
                    </div>
                    <div className='footer-column'>
                        <h3>Social Media Links</h3>
                        <ul className='footer-ul'>
                            <li className='footer-li'><a href='/'>Address</a></li>
                            <li className='footer-li'><a href='/'>Phone Number</a></li>
                            <li className='footer-li'><a href='/'>Email</a></li>
                        </ul>
                    </div>
                </div>
        </footer>
    </>
  )
}

export default Footer;
import React from 'react';
import FooterLogo from '../assets/FooterLogo.png';

function Footer() {
  return (
    <>
        <img src={FooterLogo} width={'200px'} alt="Footer logo"/>
        <ul>
            <h3>Doormat Navigation</h3>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        <ul>
            <h3>Contact</h3>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
        </ul>
        <ul>
            <h3>Social Media Links</h3>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
        </ul>
    </>
  )
}

export default Footer;
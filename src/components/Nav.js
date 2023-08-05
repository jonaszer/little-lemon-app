import React from 'react';
import LogoImage from '../assets/Logo.png';

function Nav() {
  return (
    <>
        <img src={LogoImage} width={'200px'} alt="logo" />
        <ul>
            <a href='/'><li>Home</li></a>
            <a><li>About</li></a>
            <a><li>Reservations</li></a>
            <a><li>Order Online</li></a>
            <a><li>Login</li></a>
        </ul>
    </>
  )
}

export default Nav;

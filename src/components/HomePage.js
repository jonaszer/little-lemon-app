import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Highlights from '../components/Highlights.js';
import Testimonials from '../components/Testimonials.js';
import About from '../components/About.js';
import Footer from './Footer';

function HomePage() {
  return (
    <>
        <Nav />
        <Header />
        <Highlights/>
        <Testimonials/>
        <About/>
        <Footer />
    </>
  )
}

export default HomePage;
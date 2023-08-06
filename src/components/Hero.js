import React from 'react';
import HeroImage from '../assets/restauranfood.jpg';
import '../components/css/Hero.css';
import Button from '../components/Button.js';


function Hero() {
  return (
    <article>
        <div className="article-container">
            <div className="article-column-one">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Button name='Reserve a Table'/>
            </div>
            <div className="article-column-two">
              <img
                src={HeroImage}
                alt="A man holding a plate"
                className='hero-image'
                />
            </div>
        </div>
    </article>
  )
}

export default Hero
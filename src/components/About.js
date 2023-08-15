import React from 'react';
import '../components/css/About.css';
import MarioAdrian1 from '../assets/marioadrian1.jpg';
import MarioAdrian2 from '../assets/marioadrian2.jpg';

function About(props) {
  return (
    <>
        <div id='about' className="about-container">
            <div className="photos-description-container">
                <div className="title-container">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <div className="photo-paragraph-container">
                    <div className="both-photos-container">
                        <div className='photo-left'>
                            <img className='photo' src={MarioAdrian2} alt='Mario and Adrian.'/>
                        </div>
                        <div className='photo-right'>
                            <img className='photo border' src={MarioAdrian1} alt='Mario and Adrian.'/>
                        </div>
                    </div>
                    <div className='paragraph-container'>
                        <p>Lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon lemon.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About;
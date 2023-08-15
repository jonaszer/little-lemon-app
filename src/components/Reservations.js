import React from 'react';
import '../components/css/Reservations.css';
import Nav from './Nav';
import Footer from './Footer';
import Button from '../components/Button';
import Indoor from '../assets/indoor.jpg';
import Outdoors from '../assets/outdoors.jpg';


function Reservations() {
  return (
    <>
      <Nav />
      <div className="reservations-container">
        <div className="reservations-title-container">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <form>
          <div className="both-reservation-columns-container">
            <div className="contact-column-one">
              <div className="contact-inputs">
                <label for="date-picker">When would you like to visit us?</label>
                <input type="date" id="date-picker" name="selectedDate"/>
              </div>
              <div className="contact-inputs">
                <label for="time-picker">What time would you like to visit?</label>
                <input type="time" id="time-picker" name="selectedTime"/>
              </div>
              <div className="contact-inputs">
                <label for="dinners-number">How many dinners required?</label>
                <input type="number" id="dinners-number" name="selectedDinners" placeholder='Number of people' min={1} max={12}/>
              </div>
            </div>
            <div className='contact-column-two'>
              <label>Select ocassion</label>
              <select className="occasion">
                <option value="default" default>Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
              </select>
              <Button name='Continue'/>
            </div>
          </div>
          <div className='contact-details-container'>
            <h1>Contact details</h1>
            <div className="both-contact-containers">
              <div className='contact-detail-column-one'>
                <div className="details-inputs">
                  <label for="first-name">First name</label>
                  <input type="text" id="first-name" name="first-name" placeholder='Enter your first name' Required/>
                </div>
                <div className="details-inputs">
                  <label for="last-name">Last name</label>
                  <input type="text" id="last-name" name="last-name" placeholder='Enter your last name' Required/>
                </div>
                <div className="details-inputs">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" placeholder='Enter your email' Required/>
                </div>
                <div className="details-inputs">
                  <label for="phone-number">Phone number (Optional)</label>
                  <input type="number" id="phone-number" name="Phone number" placeholder='Enter your phone number'/>
                </div>
              </div>
              <div className='contact-detail-column-two'>
                <label for="options">Where would you like to be placed at?</label>
                <div className="both-locations-container">
                  <div className='location-container'>
                    <img className='sitting-location' src={Indoor} alt='Indoor restaurant'/>
                    <div className="indoor-selection-container">
                      <input type="radio" id="Indoors" name="options" value="Indoors" checked/>
                      <label for="Indoors">Indoors</label>
                    </div>
                  </div>
                  <div className='location-container'>
                    <img className='sitting-location' src={Outdoors} alt='Outdoor restaurant'/>
                      <div className="indoor-selection-container">
                        <input type="radio" id="Outdoors" name="options" value="Outdoors" checked/>
                        <label for="Outdoors">Outdoors</label>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-wrapper"><Button name='Submit'/></div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Reservations;
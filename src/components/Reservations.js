import React from 'react';
import '../components/css/Reservations.css';
import Nav from './Nav';
import Footer from './Footer';
import Indoor from '../assets/indoor.jpg';
import Outdoors from '../assets/outdoors.jpg';
import { useState } from "react";
import {validateEmail} from "../components/utils.js";


function Reservations() {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [dinners, setDinners] = useState("");
  const [occasion, setOccasion] = useState("Occasion");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [indoors, setIndoors] = useState(false);
  const [outdoors, setOutdoors] = useState(false);

  const getIsFormValid = () => {
    return (
      date &&
      time &&
      dinners &&
      occasion !== 'Occasion' &&
      firstName &&
      lastName &&
      validateEmail(email) &&
      ((indoors === true && outdoors === false) || (outdoors === true && indoors === false))
    );
  }

  const clearForm = () => {
      setDate("");
      setTime("");
      setDinners("");
      setOccasion("Occasion");
      setFirstName("");
      setLastName("");
      setEmail("");
      setIndoors(false);
      setOutdoors(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table is booked!");
    clearForm();
  }

  return (
    <>
      <Nav />
      <div className="reservations-container">
        <div className="reservations-title-container">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="both-reservation-columns-container">
            <div className="contact-column-one">
              <div className="contact-inputs">
                <label for="date-picker">When would you like to visit us?</label>
                <input
                  type="date"
                  value={date}
                  id="date-picker"
                  name="selectedDate"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  />
              </div>
              <div className="contact-inputs">
                <label for="time-picker">What time would you like to visit?</label>
                <input
                  type="time"
                  value={time}
                  id="time-picker"
                  name="selectedTime"
                  min="08:00"
                  max="20:00"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  />
              </div>
              <div className="contact-inputs">
                <label for="dinners-number">How many dinners required?</label>
                <input
                  type="number"
                  value={dinners}
                  id="dinners-number"
                  name="selectedDinners"
                  placeholder='Number of people'
                  min={1}
                  max={12}
                  onChange={(e) => {
                    setDinners(e.target.value);
                  }}
                  />
              </div>
            </div>
            <div className='contact-column-two'>
              <label>Select ocassion</label>
              <select
                className="occasion"
                value={occasion}
                onChange={(e) => {
                  setOccasion(e.target.value);
                }}
                >
                <option>Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
              </select>
              <a className='continue-button' href='#contact-details'>Continue</a>
            </div>
          </div>
          <div className='contact-details-container' id='contact-details'>
            <h1>Contact details</h1>
            <div className="both-contact-containers">
              <div className='contact-detail-column-one'>
                <div className="details-inputs">
                  <label for="first-name">First name</label>
                  <input
                    type="text"
                    value={firstName}
                    id="first-name"
                    name="first-name"
                    placeholder='Enter your first name'
                    required
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="details-inputs">
                  <label for="last-name">Last name</label>
                  <input
                    type="text"
                    value={lastName}
                    id="last-name"
                    name="last-name"
                    placeholder='Enter your last name'
                    required
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    />
                </div>
                <div className="details-inputs">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    value={email}
                    id="email"
                    name="email"
                    placeholder='Enter your email'
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    />
                </div>
                <div className="details-inputs">
                  <label for="phone-number">Phone number (Optional)</label>
                  <input
                    type="number"
                    value={phoneNumber}
                    id="phone-number"
                    name="Phone number"
                    placeholder='Enter your phone number'
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    />
                </div>
              </div>
              <div className='contact-detail-column-two'>
                <label for="options">Where would you like to be placed at?</label>
                <div className="both-locations-container">
                  <div className='location-container'>
                    <img className='sitting-location' src={Indoor} alt='Indoor restaurant'/>
                    <div className="indoor-selection-container">
                      <input
                      type="radio"
                      id="Indoors"
                      name="options"
                      value={indoors}
                      onChange={(e) => {
                        setIndoors(true);
                        setOutdoors(false);
                      }}
                      />
                      <label for="indoors">Indoors</label>
                    </div>
                  </div>
                  <div className='location-container'>
                    <img className='sitting-location' src={Outdoors} alt='Outdoor restaurant'/>
                      <div className="indoor-selection-container">
                        <input
                        type="radio"
                        id="Outdoors"
                        name="options"
                        value={outdoors}
                        onChange={(e) => {
                          setOutdoors(true);
                          setIndoors(false);
                        }}
                        />
                        <label for="outdoors">Outdoors</label>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-wrapper">
            <button className="submit-button" type="submit" disabled={!getIsFormValid()}>Book a table</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Reservations;
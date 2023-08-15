import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage.js';
import Reservations from './components/Reservations.js';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

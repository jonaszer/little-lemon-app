import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage.js';
import Main from './components/Main.js';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservations" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

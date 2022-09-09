import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import ApplyCustomer from './components/ApplyCustomer';
import Landing from './components/Landing';
import Footer from './components/Footer';
import SolarTypes from './components/SolarTypes';
import Technicians from './components/Technicians';
import About from './components/About';

function App() {
  
  return (
    <div>
    
    
    <BrowserRouter>
    <div >
    <Navigation />
      <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/home" element={<Landing />} />
      <Route exact path="/solartypes" element={<SolarTypes />} />
      <Route exact path="/application" element={<ApplyCustomer />} />
      <Route exact path="/technicians" element={<Technicians />} />
      <Route exact path="/about" element={<About />} />
      </Routes>
    <Footer />
    </div>
    </BrowserRouter>
    
    </div>
    
    
  );
}

export default App;
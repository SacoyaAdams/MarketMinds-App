import React from 'react';
import './App.css';
import Carousel from './Carousel';
import Navbar from './navbar'; // Correct the filename to Navbar.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './navbar.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Carousel />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Carousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


// Assuming you have a Navbar component
//import Navbar from './navbar'; 
//import Home from './Home';
//import BlogPage from './BlogPage';
//import ContactPage from './ContactPage';
//import Post from "./Post";
//import Post2 from "./Post2";
//import Post3 from "./Post3";
//import Post4 from "./Post4";

function App() {
  return (
    <Router>
      <div className="app">
        <Carousel />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import { MarketsPage } from "./MarketsPage";
import { NavBar } from "./Navbar";
import BlogPage  from "./BlogPage"; // Corrected the capitalization
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  WatchList   from "./WatchList";
import { SignInPage } from "./SignInPage";
import  HomePage  from "./HomePage";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Markets" element={<MarketsPage />} />
          <Route path="/BlogPage" element={<BlogPage />} /> {/* Corrected the path to "/Blogs" */}
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





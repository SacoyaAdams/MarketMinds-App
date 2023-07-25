import React from "react";
import "./App.css";
import { MarketsPage } from "./MarketsPage";
import { NavBar } from "./Navbar";
import BlogPage  from "./BlogPage"; // Corrected the capitalization
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  WatchList   from "./WatchList";
import { SignInPage } from "./SignInPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MarketsPage />} />
          <Route path="/BlogPage" element={<BlogPage />} /> {/* Corrected the path to "/Blogs" */}
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





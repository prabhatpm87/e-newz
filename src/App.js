import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import FetchData from './Component/FetchData';
import Footer from './Component/Footer';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/General" element={<FetchData cat="General" />} />
        <Route exact path="/Business" element={<FetchData cat="Business" />} />
        <Route exact path="/Entertainment" element={<FetchData cat="Entertainment" />} />
        <Route exact path="/Health" element={<FetchData cat="Health" />} />
        <Route exact path="/Science" element={<FetchData cat="Science" />} />
        <Route exact path="/Sports" element={<FetchData cat="Sports" />} />
        <Route exact path="/Technology" element={<FetchData cat="Technology" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>  
  )
};

export default App;

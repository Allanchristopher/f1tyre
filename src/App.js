import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Enquiry from "./Components/Enquiry";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
 <Routes>
 <Route index path="/" element={<Home />} />
 <Route path="/Enquiry" element={<Enquiry />} />
 </Routes>
 <Contact/>
 <Footer />
 </BrowserRouter>
    </div>
  );
}

export default App;

// <Navbar />
// <Home />
//   <Aboutus />
// <Ourbrands />
//  <Ourproducts />
//<Gallery />
//  <Testmonial />
// <Add />
// <Ourservices />
// <Contact />
// <Footer />


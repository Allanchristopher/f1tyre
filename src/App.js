import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Ourbrands from './Components/Ourbrands';
import Ourproducts from './Components/Ourproducts';
import Gallery from './Components/Gallery';
import Testmonial from './Components/Testmonial';
import Add from './Components/Add';
import Ourservices from './Components/Ourservices';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import Enquiry from './Components/Enquiry';






function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Aboutus/>
      <Ourbrands/>
      <Ourproducts/>
      <Gallery/>
      <Testmonial/>
      <Add/>
      <Ourservices/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

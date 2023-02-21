import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Fleets from '../pages/Fleets';
import About from '../pages/About';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/fleets" element={<Fleets />} />
    </Routes>
  );
}

export default Router;

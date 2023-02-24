import React from 'react';
import Router from './components/Router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js" />
      <script src="./assets/js/navbar/navbarCollapse.js" />
      <script src="./assets/js/navbar/backToTop.js" />
      <script src="./assets/js/home-modules/changeBackground.js" />
      <script src="./assets/js/home-modules/btnOurServices.js" />
    </>
  );
}

export default App;

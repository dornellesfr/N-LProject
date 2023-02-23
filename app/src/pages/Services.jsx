import React from 'react';
import { Link } from 'react-router-dom';
import Carousel1 from '../components/Carousel1';
import Carousel2 from '../components/Carousel2';
import Background from '../components/Background';
import '../assets/css/styleServices.css';

function Services() {
  return (
    <>
      <Background />
      <main className="main-content">
        <div className="title">
          <h1 className="text-white text-xl lg:text-3xl md:text-2xl  font-semibold whitespace-nowrap">Serviços prestados</h1>
        </div>
        <section className="carousel1">
          <h2>Alguns de nossos serviços prestados</h2>
          <Carousel1 id="carousel1" />
          <p>adad</p>
        </section>
        <section>
          <h2>adasd</h2>
          <Carousel2 id="carousel2" />
          <p>adasd</p>
        </section>
        <Link to="/about" id="btn-our-services" className="w-7/12 border-solid border-2 border-white text-white hover:text-white hover:backdrop-blur-sm hover:w-9/12 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-2 py-2.5 text-center mt-10 transition-all self-center md:text-3xl md:w-4/12">Conheça mais sobre a empresa</Link>
      </main>
    </>
  );
}

export default Services;

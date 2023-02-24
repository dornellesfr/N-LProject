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
          <h1 className="text-white text-3xl lg:text-4xl md:text-4xl font-sans whitespace-nowrap">Serviços</h1>
        </div>
        <section className="animate__animated animate__bounceInLeft container-first-carousel text-white text-base lg:text-xl md:text-lg font-bold whitespace-nowrap">
          <div className="justify-center first-carousel">
            <Carousel1 />
          </div>
          <ul className="list">
            <li>A nossa frota é constituída por:</li>
            <li>2 Escavadeiras hidráulicas;</li>
            <li>2 Retroescavadeiras;</li>
            <li>2 Patrolas;</li>
            <li>2 Caçambas traçadas;</li>
            <li>1 Caminhão prancha;</li>
            <li>Além de 3 veículos de apoio.</li>
          </ul>
        </section>
        <section className="animate__animated animate__bounceInRight container-first-carousel text-white text-base lg:text-xl md:text-lg font-bold whitespace-nowrap">
          <div className="justify-center first-carousel">
            <Carousel2 />
          </div>
          <ul className="list">
            <li>Nosos principais Clientes:</li>
            <li>Southern Forest;</li>
            <li>Sul Agroflorestal Ltda- Bagé;</li>
            <li>Terra Brazil;</li>
            <li>Silveirado;</li>
            <li>Tanac, Tanagro;</li>
            <li>FM cavacos;</li>
          </ul>
        </section>
        <Link to="/about" id="btn-our-services" className="w-7/12 border-solid border-2 border-white text-white hover:text-white hover:backdrop-blur-sm hover:w-9/12 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-2 py-2.5 text-center mt-10 transition-all self-center md:text-3xl md:w-4/12">Conheça mais sobre a empresa</Link>
      </main>
    </>
  );
}

export default Services;

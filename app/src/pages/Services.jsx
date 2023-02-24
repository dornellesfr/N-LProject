import React from 'react';
import { Link } from 'react-router-dom';
import Carousel1 from '../components/Carousel1';
import Carousel2 from '../components/Carousel2';
import Background from '../components/Background';
import '../assets/css/styleServices.css';
import video5 from '../assets/videos/5.mp4';
import video1 from '../assets/videos/1.mp4';
import video3 from '../assets/videos/3.mp4';
import video4 from '../assets/videos/4.mp4';

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
        <section id="services" className="flex flex-col items-center mb-24 overflow-hidden md:mb-96">
          <div id="videos" className="grid grid-cols-1">
            <section id="video-1" className="flex w-full justify-center p-2 md:p-10">
              <video className="flex w-full h-auto max-w-full border border-gray-200 rounded-lg p-4" controls autoPlay muted>
                <source src={video5} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </section>
            <section id="video-2" className="flex justify-center p-2 md:p-10">
              <video className="flex w-full h-auto max-w-full border border-gray-200 rounded-lg p-4 " controls autoPlay muted>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </section>
            <section id="video-3" className="flex justify-center p-2 md:p-10">
              <video className="flex w-full h-auto max-w-full border border-gray-200 rounded-lg p-4 " controls autoPlay muted>
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </section>
            <section id="video-4" className="flex justify-center p-2 md:p-10">
              <video className="flex w-full h-auto max-w-full border border-gray-200 rounded-lg p-4" controls autoPlay muted>
                <source src={video4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </section>
          </div>
          <Link to="/about" id="btn-our-services" className="w-7/12 border-solid border-2 border-white text-white hover:text-white hover:backdrop-blur-sm hover:w-9/12 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-2 py-2.5 text-center mt-10 transition-all self-center md:text-3xl md:w-4/12">Conheça mais sobre a empresa</Link>
        </section>
      </main>
    </>
  );
}

export default Services;

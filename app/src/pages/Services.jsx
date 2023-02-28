import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Background from '../components/Background';
import Title from '../components/Title';
import video5 from '../assets/videos/5.mp4';
import video1 from '../assets/videos/1.mp4';
import bg from '../assets/images/bg/84.jpg';
import img73 from '../assets/images/servicos/73.jpg';
import img84 from '../assets/images/servicos/84.jpg';
import img53 from '../assets/images/servicos/53.jpg';
import img14 from '../assets/images/servicos/14.jpg';
import img54 from '../assets/images/servicos/54.jpg';
import img11 from '../assets/images/servicos/11.jpg';
import img13 from '../assets/images/servicos/13.jpg';
import img30 from '../assets/images/servicos/30.jpg';
import img1 from '../assets/images/servicos/1.jpg';
import img4 from '../assets/images/servicos/4.jpg';
import img6 from '../assets/images/servicos/6.jpg';
import img40 from '../assets/images/bg/40.jpg';
import img15 from '../assets/images/servicos/15.jpg';
import img16 from '../assets/images/servicos/16.jpg';
import img18 from '../assets/images/servicos/18.jpg';
import img19 from '../assets/images/servicos/19.jpg';
import img22 from '../assets/images/servicos/22.jpg';
import img21 from '../assets/images/servicos/21.jpg';
import img87 from '../assets/images/servicos/87.jpg';
import img34 from '../assets/images/servicos/34.jpg';
import img38 from '../assets/images/servicos/38.jpg';
import img55 from '../assets/images/servicos/55.jpg';
import '../assets/css/styleServices.css';

function Services() {
  const firstSlide = [img73, img84, img53, img14, img54, img11, img13, img30, img1, img4, img6];
  const secondSlide = [img40, img15, img16, img18, img19, img22, img21, img87, img34, img38, img55];

  function setToTopFunc() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    setToTopFunc();
  }, []);

  return (
    <>
      <Background img={bg} />
      <main className="main-content">
        <Title titlePage="Serviços" />
        <section className="animate__animated animate__bounceInLeft container-first-carousel text-white text-base lg:text-xl md:text-lg font-bold whitespace-nowrap">
          <div className="justify-center first-carousel">
            <Carousel imgs={firstSlide} />
          </div>
          <ul className="list">
            <li><h2> A nossa frota é constituída por:</h2></li>
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
            <Carousel imgs={secondSlide} />
          </div>
          <ul className="list">
            <li>Nosos principais Clientes:</li>
            <li>Southern Forest;</li>
            <li>Sul Agroflorestal Ltda - Bagé;</li>
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
          </div>
          <Link to="/about" id="btn-our-services" className="w-7/12 border-solid border-2 border-white text-white hover:text-white hover:backdrop-blur-sm hover:w-9/12 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-2 py-2.5 text-center mt-10 transition-all self-center md:text-3xl md:w-4/12">Conheça mais sobre a empresa</Link>
        </section>
      </main>
    </>
  );
}

export default Services;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styleAbout.css';
import assets from '../utils/images';
import bg from '../assets/images/bg/about-bg.jpg';
import TimeLineEmp from '../components/TimeLineEmp';
import CardListContainer from '../components/CardListContainer';

const machines = [{ url: assets.img3, title: '' }, { url: assets.img4, title: '' }, { url: assets.img5, title: '' }, { url: assets.img6, title: '' }, { url: assets.img14, title: '' }, { url: assets.img18, title: '' }];

const crew = [{ url: assets.img39, title: '' }, { url: assets.img38, title: '' }, { url: assets.img37, title: '' }];

function About() {
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
      <div id="about-page-bg" className="fixed h-screen w-screen overflow-hidden" style={{ backgroundImage: { bg } }} />
      <h1 id="service-title" className="mb-2 text-4xl font-extrabold leading-none tracking-wide text-white md:text-5xl lg:text-6xl p-3 md:p-10 bg-secondary shadow-inner">Um pouco sobre nós</h1>
      <main className="flex flex-col gap-16">
        <div className="w-11/12 m-auto bg-primary p-8 rounded-lg sm:w-9/12 md:w-8/12 2xl:w-7/12 outline-dashed outline-2 outline-offset-2 outline-secondary shadow-2xl mt-16">
          <h2 className="text-white text-xl lg:text-3xl md:text-2xl font-bold whitespace-nowrap mb-12">História da empresa</h2>
          <TimeLineEmp />
        </div>
        <section className=" bg-primary shadow-2xl">
          <h2 className="text-white text-xl lg:text-3xl md:text-2xl font-bold p-6">Atualmente contamos com um vasto maquinário para realização de obras:</h2>
          <CardListContainer photos={machines} />
        </section>
        <section className="team-content bg-secondary shadow-2xl">
          <h2 className="text-white text-xl lg:text-3xl md:text-2xl font-bold whitespace-nowrap p-6">Nossa equipe:</h2>
          <CardListContainer photos={crew} />
        </section>
        <section className="contact-us">
          <Link to="/contact" id="btn-our-services" className="border-solid border-2 border-white text-white hover:backdrop-blur-sm focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-20 py-2.5 text-center hover:px-32 mt-10 self-center md:text-3xl md:hover:px-96">Fale conosco</Link>
        </section>
      </main>
    </>

  );
}

export default About;

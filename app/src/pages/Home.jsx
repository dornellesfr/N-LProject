import React from 'react';
import '../assets/css/styleHome.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div id="home-bg-1" className="fixed w-screen h-screen" />
      <div id="home-bg-2" className="fixed w-screen h-screen" />
      <main id="#home-page-content" className="mb-24">
        <section id="home-content" className="grid grid-cols-1 w-full h-screen md:grid-cols-3">
          <div className="">
            <h1 id="home-title" className="mb-1 text-4xl font-extrabold leading-none tracking-wide text-white md:text-5xl lg:text-6xl p-3 md:p-10">Home page</h1>
          </div>
          <div id="home-card" />
          <div className="flex justify-center items-center">
            <Link to="/services" className="flex justify-center items-center">
              <button id="home-btn-know-services" type="button" className="text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 mr-2 mb-2 focus:outline-none">Conheça nossos serviços</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

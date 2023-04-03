import React from 'react';
import '../assets/css/styleHome.css';
import { Link } from 'react-router-dom';
import BgHome from '../components/BgHome';
import CardCompany from '../components/CardCompany';

function Home() {
  return (
    <main id="home-content" className="mb-[500px] grid grid-cols-1 w-full h-screen md:mb-0 md:grid-cols-2">
      <BgHome />
      <div className="h-96">
        <h1 id="home-title" className="mb-1 text-4xl font-extrabold leading-none tracking-wide text-white md:text-5xl lg:text-6xl p-3 md:p-10">Home page</h1>
        <Link to="/services" className="flex justify-center items-center">
          <button id="home-btn-know-services" type="button" className="text-white mt-24 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-lg rounded-lg px-5 py-4 mr-2 mb-2 focus:outline-none">Conheça nossos serviços</button>
        </Link>
      </div>
      <CardCompany />
    </main>
  );
}

export default Home;

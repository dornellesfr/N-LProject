import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styleNavbar.css';
import logoNL from '../assets/images/logos/NL-Logo.jpeg';
import mariana from '../assets/images/logos/Mariana.jpeg';
import backToTop from '../utils/backToTop';

function Navbar() {
  return (
    <nav id="nav-bar" className="sticky top-0 px-2">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logoNL} className="h-6 mr-3 sm:h-10" alt="Empresa Logo" />
          <span className="self-center text-white text-xl font-semibold whitespace-nowrap">N&L</span>
        </Link>
        <Link to="/" className="flex items-center">
          <img src={mariana} className="h-6 mr-3 sm:h-10" alt="Empresa Logo" />
          <span className="self-center text-white text-xl font-semibold whitespace-nowrap">Mariana</span>
        </Link>
        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white" aria-controls="navbar-dropdown" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul id="ul-navbar" className="flex flex-col items-center p-4 mt-4 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link to="/" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">Serviços</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">Sobre</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">Contato</Link>
            </li>
            <li>
              <button id="to-top-anchor" onClick={(event) => backToTop(event)} className="m-auto w-full text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center flex justify-center " type="button">
                Retornar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

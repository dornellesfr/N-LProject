import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full bg-blue-800 shadow md:flex md:items-center md:justify-between md:p-2">
      <span
        className="text-sm text-white sm:text-center"
      >
        © 2023
        <Link to="/" className="hover:underline">N-L™</Link>
        . Todos os Direitos reservados.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
        <li>
          <Link to="/about" className="mr-4 hover:underline md:mr-6 ">Sobre</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">Contato</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

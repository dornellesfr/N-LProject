import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/contact">Contato</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/fleets">Frotas</Link>
      <Link to="/services">Serviços</Link>
    </>
  );
}

export default Navbar;

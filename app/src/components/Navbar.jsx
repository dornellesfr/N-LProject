import React from 'react';
import { Navigate } from 'react-router-dom';

function Navbar() {
  const history = Navigate();
  function toAbout() {
    history({ pathname: '/about' });
  }

  function toContact() {
    history({ pathname: '/contact' });
  }
  return (
    <>
      <button type="button" onClick={toAbout}>About</button>
      <button type="button" onClick={toContact}>Contact</button>
    </>
  );
}

export default Navbar;

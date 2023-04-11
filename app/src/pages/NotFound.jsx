import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styleNotFound.css';
import error from '../assets/images/svg/error-404.svg';

function NotFound() {
  return (
    <main className="not-found-main-content">
      <section className="not-found-text">
        <h1>OOPS</h1>
        <p>Esta página não foi encontada</p>
        <Link to="/">Voltar para página principal</Link>
      </section>
      <section className="not-found-imgs">
        <img src={error} alt="erro" className="not-found-error" />
      </section>
    </main>
  );
}

export default NotFound;

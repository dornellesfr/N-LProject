import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../assets/css/styleNavbar.css';
import { Navbar, Button } from 'flowbite-react';
import logoNL from '../assets/images/logos/NL-Logo.jpeg';
import mariana from '../assets/images/logos/Mariana.jpeg';
import backToTop from '../utils/backToTop';

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="info-bar" className="sticky top-0 bg-white h-10 font-sm flex flex-row items-center justify-center md:h-6 px-1">
          <ul className=" text-gray-500 text-sm list-none flex flex-row gap-1 md:gap-6">
            <li className="text-xs md:text-base">
              servicos.nlterraplanagem@gmail.com
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Link to="https://wa.me/5551995849857" target="_blank" className="flex flex-row gap-2 items-center">
                <svg fill="#7d7d7d" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="-5.21 -5.21 41.09 41.09" xmlSpace="preserve">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g>
                      {' '}
                      <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z" />
                      {' '}
                    </g>
                    {' '}
                  </g>
                </svg>
                <p className="text-xs md:text-base">(51) 99584-9857</p>
              </Link>
            </li>
          </ul>
        </div>
        <div id="nav-bar" className="sticky h-10 top-10 bg-blue-600 md:top-6">
          <Navbar
            fluid
            rounded
            className="bg-blue-600"
            id="nav-bar"
          >
            <Navbar.Brand as={NavLink} to="/">
              <img
                src={logoNL}
                className="mr-3 h-6 sm:h-9 bg-blue-600"
                alt="NL-Logo"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                N&L
              </span>
            </Navbar.Brand>
            <Navbar.Brand as={NavLink} to="/">
              <img
                src={mariana}
                className="mr-3 h-6 sm:h-9"
                alt="Mariana-Logo"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold  text-white">
                Mariana
              </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <Button onClick={backToTop} id="btn-return" className="text-white">
                Retornar
              </Button>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse id="ul-navbar">
              <Navbar.Link
                as={NavLink}
                to="/"
                active
                className="text-white items-center text-white"
                id="home-button-navbar"
              >
                Home
              </Navbar.Link>
              <Navbar.Link as={NavLink} to="/services" className="text-white hover:bg-blue-800">
                Serviços
              </Navbar.Link>
              <Navbar.Link as={NavLink} to="/about" className="text-white hover:bg-blue-800">
                Sobre
              </Navbar.Link>
              <Navbar.Link as={NavLink} to="/contact" className="text-white hover:bg-blue-800">
                Contato
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}

export default MyNavbar;

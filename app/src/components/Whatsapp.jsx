/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import whatsappLogo from '../assets/images/svg/whatsapplogo.svg';
import QrCode from '../assets/images/svg/whatsappQrCode.svg';

class Whatsapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    if (props.display !== state.display) {
      return {
        display: props.display,
      };
    }
    return null;
  }

  render() {
    const { display } = this.state;
    return (
      <div data-testid="whatsapp-banner" id="whatsapp-content" className="grid items-center auto-rows-max grid-cols-2 w-11/12 h-1/2 bg-black opacity-90 p-3 m-auto gap-4 sm:w-10/12 md:w-7/12 lg:w-6/12 xl:w-5/12 md:h-1/2 md:grid-cols-2 animate__animated animate__bounceInLeft" style={{ display }}>
        <h2 className="col-span-full mb-6 text-sm p-2 h-6 text-white text-center uppercase md:text-lg">Entre em contato conosco também pelo whatsapp</h2>
        <img className="whatsapp-logow w-1/2 m-auto p-6 col-start-1 row-start-2" src={whatsappLogo} alt="logo-do-whatsapp" />
        <div className="col-span-2 row-start-2 flex flex-col bg-white p-4 rounded-2xl">
          <h3 className="p-4 text-sm font-extrabold leading-none tracking-tight text-black bg-white md:text-base">
            Aponte a câmera do celular para o QR code e
            entre diretamente em contato conosco
          </h3>
          <img className="p-4" src={QrCode} alt="qr-code-whatsapp" />
        </div>
        <Link to={{ pathname: 'https://wa.me/5551995849857' }} target="_blank" className="text-center whatsapp-button mt-6 px-36 col-span-full row-start-3 text-black bg-whatsapp-green hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mr-2 mb-2 w-full focus:outline-none "> Enviar mensagem </Link>
      </div>
    );
  }
}

export default Whatsapp;

Whatsapp.propTypes = {
  display: PropTypes.string.isRequired,
};

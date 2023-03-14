/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Link } from 'react-router-dom';
import whatsappLogo from '../assets/images/svg/whatsapplogo.svg';
import QrCode from '../assets/images/svg/whatsappQrCode.svg';
import '../assets/css/styleWhatsapp.css';

function Whatsapp() {
  return (
    <div className="whatsapp-content">
      <h2>Entre em contato conosco também pelo whatsapp</h2>
      <img className="whatsapp-logow" src={whatsappLogo} alt="logo-do-whatsapp" />
      <div className="whatsapp-qr-code">
        <h3 className="mb-4 text-base font-extrabold leading-none tracking-tight text-black md:text-1xl xl:text-2xl">
          Aponte a câmera do celular para o QR code e
          entre diretamente em contato conosco
        </h3>
        <img src={QrCode} alt="qr-code-whatsapp" />
      </div>
      <Link to="https://wa.me/5551995849857" target="_blank" class="whatsapp-button text-black bg-whatsapp-green hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Enviar mensagem </Link>
    </div>
  );
}

export default Whatsapp;

import React from 'react';
import '../assets/css/styleLoader.css';

function Loader() {
  return (
    <>
      <div id="loading-page" className="fixed w-screen h-screen overflow-hidden bg-black opacity-20" />
      <div id="spinner-load" />
    </>
  );
}

export default Loader;

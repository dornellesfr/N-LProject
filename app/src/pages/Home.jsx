import React, { useEffect, useState } from 'react';
import '../assets/css/styleHome.css';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/bg/84.jpg';
import img2 from '../assets/images/bg/53.jpg';
import img3 from '../assets/images/bg/40.jpg';
import img4 from '../assets/images/bg/73.jpg';

function Home() {
  const [bgIndex, setBgIndex] = useState(0);
  const allBgs = [img1, img2, img3, img4];

  useEffect(() => {
    const TIME_TO_CHANGE = 6 * 1000;
    const intervalId = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % allBgs.length);
    }, TIME_TO_CHANGE);
    return () => clearInterval(intervalId);
  }, [bgIndex]);

  return (
    <>
      <div id="bg-home-1" style={{ backgroundImage: `url('${allBgs[bgIndex]}')` }} className="fixed w-screen h-screen" />
      <div id="bg-home-2" style={{ backgroundImage: `url('${allBgs[bgIndex]}')` }} className="fixed w-screen h-screen brightness-50" />
      <main id="home">
        <section id="content" className="grid grid-cols-2 w-full h-10/12 m-auto mt-10">
          <div />
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-4xl text-white font-extrabold">
              N&L -
              <small className="ml-2 font-semibold text-white">Prestadora de Serviços</small>
            </h1>
            <h2 className="text-2xl text-white font-extrabold"> Um pouco sobre nós:</h2>
            <ul className="max-w-md space-y-1 text-white list-disc list-inside">
              <li className="border-solid border-2 border-white rounded mt-4 p-4 backDroppedDark font-bold hover:border-4 transition-all">
                Realizamos operações de terraplenagem em geral;
              </li>
              <li className="border-solid border-2 border-white rounded mt-4 p-4 backDroppedDark font-bold hover:border-4 transition-all">
                Temos grande experiência em operações ligadas a estradas florestais, barragens
                e terraços;
              </li>
              <li className="border-solid border-2 border-white rounded mt-4 p-4 backDroppedDark font-bold hover:border-4 transition-all">
                Atuamos em toda metade Sul do Estado do Rio Grande do Sul.
              </li>
            </ul>
            <Link to="/services" id="btn-our-services" className="w-4/12 border-solid border-2 border-white text-white hover:text-white hover:backdrop-blur-sm hover:w-8/12 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-2.5 text-center mt-10 transition-all">Conheça nossos serviços</Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

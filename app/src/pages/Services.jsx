import React from 'react';
// import { Link } from 'react-router-dom';
// import img1 from '../assets/images/servicos/1.jpg';
// import img2 from '../assets/images/servicos/2.jpg';

function Services() {
  return (
    <>
      <div id="bg-services" className="fixed w-screen h-screen overflow-hidden" />
      <main id="services" className="flex flex-col items-center mb-24 overflow-hidden md:mb-96">
        <div className="flex flex-col mt-10 items-center w-screen h-screen observed md:flex-row md:mt-0">
          <section id="carousel-1" className="flex flex-col items-center w-full h-10/12 pt-4 backDroppedDark md:w-10/12 md:flex-row md:pt-0 md:pl-0 md:pr-0" />
          <aside className="w-full h-fit p-4 backDroppedDark text-sm text-white font-bold md:w-1/4 md:h-96 md:text-base lg:text-xl d:w-1/4 md:pr-16">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta similique eos, sed placeat vero debitis iste? Nostrum magnam id, commodi iusto, laborum reiciendis voluptas fugiat provident, ipsum earum sit tenetur?</aside>
        </div>
        <div className="flex flex-col mt-10 items-center w-screen h-screen observed md:flex-row md:mt-0">
          <section id="carousel-2" className="flex flex-col items-center w-full h-10/12 pt-4 backDroppedDark md:w-10/12 md:flex-row md:pt-0 md:pl-0" />
          <aside className="w-full h-fit p-4 backDroppedDark text-sm text-white font-bold md:w-1/4 md:h-96 md:text-base lg:text-xl d:w-1/4 md:pr-16">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta similique eos, sed placeat vero debitis iste? Nostrum magnam id, commodi iusto, laborum reiciendis voluptas fugiat provident, ipsum earum sit tenetur?</aside>
        </div>
        <div className="flex flex-col mt-10 items-center w-screen h-screen observed md:flex-row md:mt-0">
          <section id="carousel-3" className="flex flex-col items-center w-full h-10/12 pt-4 backDroppedDark md:w-10/12 md:flex-row md:pt-0 md:pl-0" />
          <aside className="w-full h-fit p-4 backDroppedDark text-sm text-white font-bold md:w-1/4 md:h-96 md:text-base lg:text-xl d:w-1/4 md:pr-16">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta similique eos, sed placeat vero debitis iste? Nostrum magnam id, commodi iusto, laborum reiciendis voluptas fugiat provident, ipsum earum sit tenetur?</aside>
        </div>
        <div id="videos" className="grid grid-cols-1">
          <section id="video-1" className="flex w-full justify-center p-2 observed md:p-10">
            <video className="flex w-full h-auto max-w-full border border-gray-200 rounded-lg p-4" controls autoPlay muted>
              <source src="./assets/videos/5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
          <section id="video-2" className="flex justify-center p-2 observed md:p-10">
            <video className="flex w-full h-auto max-w-full border border-gray-200 rounded-lg p-4 " controls autoPlay muted>
              <source src="./assets/videos/1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
          <section id="video-3" className="flex justify-center  p-2 observed md:p-10">
            <video className="flex w-full h-auto max-w-full border border-gray-200 rounded-lg p-4 " controls autoPlay muted>
              <source src="./assets/videos/3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
          <section id="video-4" className="flex justify-center p-2 observed md:p-10">
            <video className="flex w-full h-auto max-w-full border border-gray-200 rounded-lg p-4" controls autoPlay muted>
              <source src="./assets/videos/4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
        </div>
        <a href="/sobre" id="btn-our-services" className="w-7/12 border-solid border-2 border-white text-white hover:text-white hover:backdrop-blur-sm hover:w-9/12 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-2 py-2.5 text-center mt-10 transition-all self-center md:text-3xl md:w-4/12">Conheça mais sobre a empresa</a>
      </main>

    </>
  );
}

export default Services;

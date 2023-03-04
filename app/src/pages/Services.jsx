/* eslint-disable react/no-array-index-key */
import '../assets/css/styleServices.css';
import React from 'react';
import { Link } from 'react-router-dom';
import MyCarousel from '../components/Carousel';
import MyVideo from '../components/Video';
import scrollReveal from '../utils/scrollReveal';
import { CAROUSELS, VIDEOS } from '../utils/variables';

function Services() {
  return (
    <>
      <div id="bg-services" className="fixed w-screen h-screen overflow-hidden" />
      <main id="service-page-content" className="flex mb-24 flex-col md:mb-96">
        <h1 id="service-title" className="mb-2 text-4xl font-extrabold leading-none tracking-wide text-white md:text-5xl lg:text-6xl p-3 md:p-10">Conheça nossos diversos serviços</h1>
        {CAROUSELS.map((carousel, index) => (
          <MyCarousel
            key={index}
            items={carousel.items}
            text={carousel.text}
            id={carousel.id}
          />
        ))}
        <div id="videos" className="grid grid-cols-1">
          {VIDEOS.map((video, index) => <MyVideo key={index} item={video.item} id={video.id} />)}
        </div>
        <Link href="/sobre" id="btn-our-services" className="border-solid border-2 border-white text-white hover:backdrop-blur-sm focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-20 py-2.5 text-center hover:px-32 mt-10 self-center md:text-3xl md:hover:px-96">Conheça mais sobre a empresa</Link>
      </main>
    </>
  );
}

const observed = '.observed';
const toggled = 'show';
const margin = '-300px';

scrollReveal(observed, toggled, margin);

export default Services;

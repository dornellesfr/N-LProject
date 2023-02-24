import React from 'react';
import { Carousel as Carou } from 'flowbite-react';
import img40 from '../assets/images/bg/40.jpg';
import img15 from '../assets/images/servicos/15.jpg';
import img16 from '../assets/images/servicos/16.jpg';
import img18 from '../assets/images/servicos/18.jpg';
import img19 from '../assets/images/servicos/19.jpg';
import img22 from '../assets/images/servicos/22.jpg';
import img21 from '../assets/images/servicos/21.jpg';
import img87 from '../assets/images/servicos/87.jpg';
import img34 from '../assets/images/servicos/34.jpg';
import img38 from '../assets/images/servicos/38.jpg';
import img55 from '../assets/images/servicos/55.jpg';

function Carousel2() {
  return (
    <div className="h-56 sm:h-52 xl:h-80 2xl:h-100">
      <Carou slideInterval={5000}>
        <img src={img40} alt="..." />
        <img src={img15} alt="..." />
        <img src={img16} alt="..." />
        <img src={img18} alt="..." />
        <img src={img19} alt="..." />
        <img src={img22} alt="..." />
        <img src={img87} alt="..." />
        <img src={img21} alt="..." />
        <img src={img34} alt="..." />
        <img src={img38} alt="..." />
        <img src={img55} alt="..." />
      </Carou>
    </div>
  );
}

export default Carousel2;

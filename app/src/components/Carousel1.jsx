import React from 'react';
import { Carousel as Carou } from 'flowbite-react';
import img73 from '../assets/images/servicos/73.jpg';
import img84 from '../assets/images/servicos/84.jpg';
import img53 from '../assets/images/servicos/53.jpg';
import img14 from '../assets/images/servicos/14.jpg';
import img54 from '../assets/images/servicos/54.jpg';
import img11 from '../assets/images/servicos/11.jpg';
import img13 from '../assets/images/servicos/13.jpg';
import img30 from '../assets/images/servicos/30.jpg';
import img1 from '../assets/images/servicos/1.jpg';
import img4 from '../assets/images/servicos/4.jpg';
import img6 from '../assets/images/servicos/6.jpg';

function Carousel1() {
  return (
    <div className="h-56 sm:h-52 xl:h-80 2xl:h-100">
      <Carou slideInterval={5000}>
        <img src={img73} alt="..." />
        <img src={img84} alt="..." />
        <img src={img53} alt="..." />
        <img src={img14} alt="..." />
        <img src={img54} alt="..." />
        <img src={img11} alt="..." />
        <img src={img13} alt="..." />
        <img src={img30} alt="..." />
        <img src={img1} alt="..." />
        <img src={img4} alt="..." />
        <img src={img6} alt="..." />
      </Carou>
    </div>
  );
}

export default Carousel1;

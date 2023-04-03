import React from 'react';
import '../assets/css/styleCardCompany.css';
import nllogo from '../assets/images/logos/NL-Logo.jpeg';
import marianalogo from '../assets/images/logos/Mariana.jpeg';

const box = {
  boxShadow: 'inset -50px 50px 100px #002b85, inset 50px -50px 100px #003bb3',
};

class CardCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-full h-[100vh] flex flex-col justify-center bg-primary shadow-inner brightness-90 gap-y-4" style={box}>
        <div className="flex justify-center gap-x-10 p-6 grow-animation bg-white">
          <img src={marianalogo} alt="mariana" id="logos-companies" className="rounded-full w-1/3 border-solid border-8 border-secondary md:w-60 hue-rotate-15 shadow-xl" />
          <img src={nllogo} alt="NL Logo" id="logos-companies" className="rounded-full w-1/3 border-solid border-8 border-secondary md:w-60 hue-rotate-15 shadow-xl" />
        </div>
        <h2 className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-bold bg-secondary text-center text-slate-50 p-4 grow-animation">N&L Prestadora de Serviços e Mariana Terraplanagens</h2>
        <ul className="w-10/12 text-sm font-medium text-white bg-secondary border border-white rounded-lg m-auto grow-animation list-disc list-inside">
          <li className="w-full px-4 py-2 border-b border-white rounded-t-lg">Realizamos operações de terraplanagem em geral</li>
          <li className="w-full px-4 py-2 border-b border-white ">Trabalhamos também com o aluguel de máquinas</li>
          <li className="w-full px-4 py-2 border-b border-white ">
            Temos grande experiência em operações ligadas a estradas florestais,
            barragens e terraços
          </li>
          <li className="w-full px-4 py-2 rounded-b-lg">Atuamos em toda metade do sul do Estado do Rio Grande do Sul</li>
        </ul>
        <div className="p-2 mt-2 bg-secondary grow-animation md:p-6" />
        <div className="p-2 mt-2 bg-primary grow-animation md:p-6" />
      </div>
    );
  }
}

export default CardCompany;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Background from '../components/Background';
import bg from '../assets/images/bg/40.jpg';
import Title from '../components/Title';
import img10 from '../assets/images/servicos/10.jpg';
import img12 from '../assets/images/servicos/12.jpg';
import img13 from '../assets/images/servicos/13.jpg';
import img1 from '../assets/images/equipe/1.jpg';
import img2 from '../assets/images/equipe/2.jpg';
import img3 from '../assets/images/equipe/3.jpg';
import '../assets/css/styleAbout.css';

function About() {
  function setToTopFunc() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    setToTopFunc();
  }, []);

  return (
    <>
      <Background img={bg} />
      <Title titlePage="Sobre" />
      <main>
        <div className="content-text">
          <section className="animate__animated animate__bounceInLeft history-1">
            <h2 className="text-white text-xl lg:text-3xl md:text-2xl font-bold whitespace-nowrap">História da empresa</h2>
            <p className="text-white text-base lg:text-xl md:text-lg font-bold">
              A N&L prestadora de Serviços Ltda foi constituída
              em 2013, na cidade de Taquari, pelo sócio
              proprietário Marcelo Vieira Rocha.
              As letras do nome da empresa tem significado das iniciais dos dois primeiros
              filhos do casal (Marcelo e Luana) Nestor e
              Luíza.
            </p>
            <p className="text-white text-base lg:text-xl md:text-lg font-bold">
              No início, a intenção por trás da fundação da empresa era
              melhorar a renda da família, fazendo uso das máquinas que
              já haviam sido adquiridas para a lavoura de arroz. Com o intuito de
              prestar serviços à comunidade, foram disponibilizados serviços de
              aluguel de máquinas, incluindo roçadeira articulada e trator com arado,
              para auxiliar na construção e manutenção de rodovias.
            </p>
          </section>
          <section className="animate__animated animate__bounceInRight history-2">
            <p className="text-white text-base lg:text-xl md:text-lg font-bold">
              Em 2014, decidimos investir em uma escavadeira hidráulica
              para atender aos amigos e clientes da área da agricultura,
              aproveitando nossa ampla experiência nesse segmento. Em 2017, a empresa
              fechou contrato na região de Bagé, o que resultou em um investimento em mais
              máquinas e mudança da família para esta cidade.
            </p>
            <p className="text-white text-base lg:text-xl md:text-lg font-bold">
              A empresa Mariana Terraplanagem, que tem como nome a terceira
              filha do casal, foi criada com a intenção de complementar os serviços da
              N&L, com o objetivo de complementar seus serviços,
              que envolvem a realização de obras utilizando o maquinário já mencionado.
            </p>
          </section>
          <section className="animate__animated animate__bounceInLeft history-3">
            <p className="text-white text-base lg:text-xl md:text-lg font-bold">
              Na sequência as empresas foram se desenvolvendo e se
              aperfeiçoando na área de abertura e manutenção de
              estradas no setor florestal. Hoje conta com
              colaboradores capacitados e máquinas adequadas
              para o setor, que é muito importante para a
              economia da região.
            </p>
          </section>
        </div>
        <div className="machines-part">
          <section className="machines-content">
            <article>
              <h2 className="text-white text-xl lg:text-3xl md:text-2xl font-bold whitespace-nowrap">Máquinas</h2>
              <ul className="text-white text-xl lg:text-3xl md:text-2xl font-bold whitespace-nowrap list">
                <li className="text-xl lg:text-3xl md:text-2xl"><h2> A nossa frota é constituída por:</h2></li>
                <li className="text-lg lg:text-xl md:text-lg">2 Escavadeiras hidráulicas;</li>
                <li className="text-xl lg:text-xl md:text-xl">2 Retroescavadeiras;</li>
                <li className="text-xl lg:text-xl md:text-xl">2 Patrolas;</li>
                <li className="text-xl lg:text-xl md:text-xl">2 Caçambas traçadas;</li>
                <li className="text-xl lg:text-xl md:text-xl">1 Caminhão prancha;</li>
                <li className="text-xl lg:text-xl md:text-xl">Além de 3 veículos de apoio.</li>
              </ul>
            </article>
            <img className="img-machine" src={img10} alt="machine" />
            <img className="img-machine" src={img12} alt="machine" />
            <img className="img-machine" src={img13} alt="machine" />
          </section>
        </div>
        <div className="team-part">
          <section className="team-content">
            <h2 className="text-white text-xl lg:text-3xl md:text-2xl font-bold whitespace-nowrap">Nossa equipe</h2>
            <img className="img-team" src={img1} alt="machine" />
            <img className="img-team" src={img2} alt="machine" />
            <img className="img-team" src={img3} alt="machine" />
          </section>
        </div>
        <section className="contact-us">
          <Link to="/contact" id="btn-our-services" className="w-7/12 border-solid border-2 border-white text-white hover:text-white hover:backdrop-blur-sm hover:w-9/12 focus:ring-4 focus:outline-none font-bold rounded-lg text-lg px-2 py-2.5 text-center mt-10 transition-all self-center md:text-3xl md:w-4/12">Entre em contato conosco!</Link>
        </section>
      </main>
    </>

  );
}

export default About;

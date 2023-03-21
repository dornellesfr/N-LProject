import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styleAbout.css';
import assets from '../utils/images';

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
      <div id="bg-about" className="fixed w-screen h-screen overflow-hidden" />
      <h1 id="service-title" className="mb-2 text-4xl font-extrabold leading-none tracking-wide text-white md:text-5xl lg:text-6xl p-3 md:p-10">Um pouco sobre nós</h1>
      <main>
        <div className="content-text">
          <section data-testid="page-about-first-box-text" className="animate__animated animate__bounceInLeft history-1">
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
          <section data-testid="page-about-second-box-text" className="animate__animated animate__bounceInRight history-2">
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
              N&L, que envolvem a realização de obras utilizando o maquinário para construção
              e manutenção de estradas e rodovias.
            </p>
          </section>
          <section data-testid="page-about-third-box-text" className="animate__animated animate__bounceInLeft history-3">
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
            <h2 className="text-white text-xl lg:text-3xl md:text-2xl font-bold">Atualmente contamos com um vasto maquinário para realização de obras.</h2>
            <img className="img-machine" src={assets.img3} alt="machine" />
            <img className="img-machine" src={assets.img4} alt="machine" />
            <img className="img-machine" src={assets.img5} alt="machine" />
            <img className="img-machine" src={assets.img6} alt="machine" />
            <img className="img-machine" src={assets.img14} alt="machine" />
            <img className="img-machine" src={assets.img18} alt="machine" />
          </section>
        </div>
        <div className="team-part">
          <section className="team-content">
            <h2 className="text-white text-xl lg:text-3xl md:text-2xl font-bold whitespace-nowrap">Nossa equipe</h2>
            <img className="img-team" src={assets.img39} alt="team" />
            <img className="img-team" src={assets.img38} alt="team" />
            <img className="img-team" src={assets.img37} alt="team" />
          </section>
        </div>
        <section className="contact-us">
          <Link to="/contact" id="btn-our-services" className="border-solid border-2 border-white text-white hover:backdrop-blur-sm focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-20 py-2.5 text-center hover:px-32 mt-10 self-center md:text-3xl md:hover:px-96">Fale conosco</Link>
        </section>
      </main>
    </>

  );
}

export default About;

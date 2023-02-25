import React, { useEffect } from 'react';
import Background from '../components/Background';
import bg from '../assets/images/bg/40.jpg';
import Title from '../components/Title';
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
        <div className="blur-square" />
        <div className="content-text">
          <section className="animate__animated animate__bounceInLeft history-1">
            <h2 className="text-white text-xl lg:text-3xl md:text-2xl font-bold whitespace-nowrap">História da empresa</h2>
            <p className="text-white text-lg lg:text-xl md:text-lg font-bold">
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
            <h2 className="text-white text-xl lg:text-3xl md:text-2xl font-bold whitespace-nowrap">História da empresa</h2>
            <p className="text-white text-base lg:text-xl md:text-lg font-bold">
              Em 2014, decidimos investir em uma escavadeira hidráulica
              para atender aos amigos e clientes da área da agricultura,
              aproveitando nossa ampla experiência nesse segmento. Em 2017, a empresa
              fechou contrato na região de Bagé, o que resultou em um investimento em mais
              máquinas e mudança da família para esta cidade.
            </p>
            <p className="text-white text-base lg:text-xl md:text-lg font-bold">
              A empresa Mariana Terraplanagem foi criada para atuar em
              conjunto com a N&L, com o objetivo de complementar seus serviços,
              que envolvem a realização de obras utilizando o maquinário já mencionado.
            </p>
          </section>

        </div>
      </main>
    </>

  );
}

export default About;

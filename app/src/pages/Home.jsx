import React from 'react';
import '../assets/css/styleHome.css';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

export default class MyContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="home-bg-1" className="fixed w-screen h-screen" />
        <div id="home-bg-2" className="fixed w-screen h-screen" />
        <main id="#home-page-content" className="mb-24">
          <section id="home-content" className="grid grid-cols-1 w-full h-screen md:grid-cols-3">
            <div className="">
              <h1 id="home-title" className="mb-1 text-4xl font-extrabold leading-none tracking-wide text-white md:text-5xl lg:text-6xl p-3 md:p-10">Home page</h1>
            </div>
            <div id="home-card" />
            <div className="flex justify-center items-center">
              <Link to="/services" className="flex justify-center items-center">
                <Button id="home-btn-know-services" className="text-white mt-8">
                  Conheça nossos serviços
                </Button>
              </Link>
            </div>
          </section>
        </main>
      </>
    );
  }
}

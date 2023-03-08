import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import About from '../pages/About';
import Services from '../pages/Services';
import NotFound from '../pages/NotFound';
import Loader from './Loader';

export default class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    const { loading } = this.state;
    return (
      <Routes>
        {loading ? <Loader /> : null}
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

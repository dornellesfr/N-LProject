import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import About from '../pages/About';
import Services from '../pages/Services';
import NotFound from '../pages/NotFound';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contacts} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Router;

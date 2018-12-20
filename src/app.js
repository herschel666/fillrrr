import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import { render } from 'hops';
import { NotFound } from './pages/not-found/';
import { Home } from './pages/home/';
import 'normalize.css?global';

const App = () => (
  <>
    <Helmet>
      <title>Fillrrr</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="noindex, nofollow, noarchive" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/*" component={NotFound} />
    </Switch>
  </>
);

export default render(<App />);

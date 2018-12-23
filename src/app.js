import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import { render } from 'hops';

import { GlobalStyles } from './global-styles';
import { Header } from './components/header';
import { NotFound } from './pages/not-found';
import { Home } from './pages/home';

const App = () => (
  <>
    <GlobalStyles />
    <Helmet>
      <title>Fillrrr</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="noindex, nofollow, noarchive" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/*" component={NotFound} />
    </Switch>
  </>
);

export default render(<App />);

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { render } from 'hops';

import { GlobalStyles } from './global-styles';
import { HtmlHead } from './components/html-head';
import { Header } from './components/header';
import { NotFound } from './pages/not-found';
import { Home } from './pages/home';

const App = () => (
  <>
    <HtmlHead />
    <GlobalStyles />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/*" component={NotFound} />
    </Switch>
  </>
);

export default render(<App />);

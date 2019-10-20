import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Nav from './components/Nav';
import theme from './theme';

import Home from './Home';
import Game from './Game';
import Presentation from './Presentation';
import Features from './Features';

const GlobalStyle = createGlobalStyle`
  body {
    color: '#FFF';
    padding: 0 10px;
  }
`;

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/presentation" component={Presentation} />
            <Route path="/features" component={Features} />
            <Route path="*">No stuff</Route>
          </Switch>
        </Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default App;

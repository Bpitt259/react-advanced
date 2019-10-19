import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Nav from './components/Nav';
import theme from './theme';

import Home from './Home';
import Game from './Game';
import Presentation from './presentation';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
const App = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText('Set the text state');
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/presentation" component={Presentation} />
          </Switch>
        </Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default App;

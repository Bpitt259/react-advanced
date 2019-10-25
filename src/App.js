import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Nav from './components/Nav';
import theme from './theme';

import Home from './Home';
import Game from './Game';
import Presentation from './Presentation';
import Features from './Features';
import ImageGame from './Game/ImageGame';
import ImageGameSolution from './Game/ImageGameSolution';

const GlobalStyle = createGlobalStyle`
  p {
    font-family: 'helvetica';
  }
  h1 {
    font-family: 'Impact';
  }
  body {
    background-color: ${props => props.theme.color['grey-700']};

    padding: 0;
    margin: 0;
    color: '#FFF';
  }
  * {
  box-sizing: border-box;
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
            <Route path="/image-game" component={ImageGame} />
            <Route path="/image-game-solution" component={ImageGameSolution} />
            <Route path="*">No stuff</Route>
          </Switch>
        </Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default App;

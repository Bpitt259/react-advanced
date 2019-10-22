import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import Image from './Image';

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`;

const SignUpWrapper = styled.div`
  align-self: center;

  margin: 50px 0px;

  width: 300px;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const SignalButton = withStyles(theme => ({
  root: {
    color: 'white',
    backgroundColor: '#eb5463',
    '&:hover': {
      backgroundColor: '#eb5463'
    }
  }
}))(Button);

const Game = () => {
  function sendToSignUp(url) {
    window.open(url, '_blank');
  }

  return (
    <GameWrapper>
      <SignUpWrapper>
        <StyledBox boxShadow={3} component="div">
          <SignalButton
            variant="contained"
            color="primary"
            onClick={() =>
              sendToSignUp(
                'https://mailchi.mp/4436fc80ddb4/react-advanced-raffle'
              )
            }
          >
            Sign Up
          </SignalButton>
        </StyledBox>
      </SignUpWrapper>
      <Image />
    </GameWrapper>
  );
};

export default Game;

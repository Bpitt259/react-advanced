import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
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
      Game
      <SignUpWrapper>
        <Box>
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
        </Box>
      </SignUpWrapper>
    </GameWrapper>
  );
};

export default Game;

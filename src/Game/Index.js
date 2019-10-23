import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const GameWrapper = styled.div`
  background-color: ${props => props.theme.color['grey-700']};

  display: flex;
  flex-direction: column;
  margin: 50px auto;

  height: 100%;
  width: 100%;
`;

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 100%;
`;

export const Text = styled.p`
  text-align: center;
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.font.size.large};
`;

const Header = styled.h1`
  text-align: center;

  color: ${props => props.theme.color.red};
  font-size: 40px;
`;

const StyledImage = styled.img`
  align-self: center;
  display: flex;
  width: 30%;
`;

export const StyledBox = styled(Box)`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 200px;
  width: 300px;
`;

export const SignalButton = withStyles(theme => ({
  root: {
    color: 'white',
    alignSelf: 'center',
    width: '80%',
    marginBottom: '50px',
    backgroundColor: '#eb5463',
    '&:hover': {
      backgroundColor: '#d94e4e'
    }
  }
}))(Button);

export const ButtonWrap = styled.div`
  align-self: center;

  margin: 50px;

  width: 300px;
`;

const Game = props => {
  function sendToSignUp(url) {
    window.open(url, '_blank');
  }

  return (
    <GameWrapper>
      <StyledImage
        src={require('../assets/images/signal_logo_red.png')}
        alt="signal logo"
      />
      <Header>Challenge</Header>
      <SignUpWrapper>
        <StyledBox boxShadow={3} component="div">
          <Text>Sign up for Raffle</Text>
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
        <StyledBox boxShadow={3} component="div">
          <Text>Take the Challenge</Text>
          <SignalButton
            variant="contained"
            color="primary"
            onClick={() => props.history.push('/image-game')}
          >
            Begin
          </SignalButton>
        </StyledBox>
      </SignUpWrapper>
    </GameWrapper>
  );
};

export default withRouter(Game);

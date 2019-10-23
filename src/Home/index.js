import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;

  height: 100%;
`;

const StyledImage = styled.img`
  align-self: center;
  display: flex;
  width: 30%;
`;

const Home = ({ text }) => {
  return (
    <Wrapper>
      <StyledImage src={require('../assets/images/signal_logo_red.png')} />
    </Wrapper>
  );
};

export default Home;

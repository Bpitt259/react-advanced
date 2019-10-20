import React from 'react';
import styled from 'styled-components';

import { Deck, Heading, Slide, Text, SlideSet } from 'spectacle';

import LocationTracker from '../Features/LocationTracker';

const SignalHeader = styled(Heading).attrs({
  textColor: 'black',
  size: 4
})``;

const Presentation = () => (
  <Deck transitionDuration={500} progress="bar">
    <SlideSet style={{ background: 'red' }}>
      <Slide>
        <SignalHeader>
          React’s Tackle Box: Finding the right hooks for the job.
        </SignalHeader>
        <Text>TEST TEXT</Text>
      </Slide>
      <Slide>
        <SignalHeader>{LocationTracker()}</SignalHeader>
        <Text>Standard text</Text>
      </Slide>
      <Slide>
        <SignalHeader>Standard List</SignalHeader>
      </Slide>
      <Slide>
        <SignalHeader>Example Quote</SignalHeader>
      </Slide>
    </SlideSet>
  </Deck>
);

export default Presentation;

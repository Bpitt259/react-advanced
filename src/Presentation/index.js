import React from 'react';
import { Deck, Heading, Slide, Text } from 'spectacle';

import presentationTheme from './presentationTheme';

const Presentation = () => (
  <Deck
    theme={presentationTheme}
    transition={['zoom', 'slide']}
    transitionDuration={500}
  >
    <Slide>
      <Heading>NEW PRES</Heading>
      <Text>TEST TEXT</Text>
    </Slide>
    <Slide>
      <Heading>Typography</Heading>
      <Heading>Heading 1</Heading>
      <Heading>Heading 2</Heading>
      <Heading>Heading 3</Heading>
      <Heading>Heading 4</Heading>
      <Heading>Heading 5</Heading>
      <Text>Standard text</Text>
    </Slide>
    <Slide>
      <Heading>Standard List</Heading>
    </Slide>
    <Slide>
      <Heading>Example Quote</Heading>
    </Slide>
  </Deck>
);

export default Presentation;

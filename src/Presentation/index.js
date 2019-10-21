import React from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';

import {
  Appear,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Slide,
  SlideSet,
  Text
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import preloader from 'spectacle/lib/utils/preloader';

import UserInputCode from '../assets/UserInput.code';
import routerCode from '../assets/router.code';
import useDebounce from '../assets/useDebounce.code';
import useUpdateEffect from '../assets/useUpdateEffect.code';

import LocationTracker from '../Features/LocationTracker';
import UserInput from '../Features/UserInput';

import LivePreview from './LivePreview';

const images = {
  reactUse: require('../assets/images/react-use.png')
};
preloader(images);
Prism.highlightAll();

const SignalHeader = styled(Heading).attrs(props => ({
  textFont: 'Impact',
  textColor: props.theme.color.red,
  size: 3,
  margin: 50
}))``;

const SignalText = styled(Text).attrs(props => ({
  textFont: 'Helvetica',
  textColor: props.theme.color['grey-200'],
  size: 4,
  margin: 25
}))``;

const SignalListItem = styled(ListItem).attrs(props => ({
  margin: 10
}))``;

const slideNotes = {
  opening:
    'My name is Bryan and I’m a Software Engineer at a company called Signal, we’re a company that focuses on giving PR and Comms professionals real time information with the help of AI technology.',
  debounce:
    'React hook that delays invoking a function until after wait milliseconds have elapsed since the last time the debounced function was invoked.',
  useUpdate:
    'React effect hook that ignores the first invocation (e.g. on mount). The signature is exactly the same as the useEffect hook.'
};

const Presentation = () => (
  <Deck transitionDuration={500} progress="bar" bgColor="black">
    <SlideSet style={{ background: '#000' }}>
      {/* INTRO */}
      <Slide progressColor="#eb5463" notes={slideNotes.opening}>
        <SignalHeader caps lineHeight={1.1}>
          React’s Tackle Box : &nbsp; Using the right hooks for the job.
        </SignalHeader>
        <SignalText>Bryan Pitt / Signal AI - London</SignalText>
      </Slide>

      {/* OUR USE CASES */}
      <Slide progressColor="#eb5463" align="flex-start">
        <SignalHeader>Use cases</SignalHeader>
        <List textColor="#eb5463" textFont="Helvetica">
          <Appear>
            <SignalListItem margin={10}>
              useDebounce - performant form controls
            </SignalListItem>
          </Appear>
          <Appear>
            <SignalListItem margin={10}>
              useUpdateEffect - Initial load (by pass save)
            </SignalListItem>
          </Appear>
          <Appear>
            <SignalListItem margin={10}>useHover - UI</SignalListItem>
          </Appear>
          <Appear>
            <SignalListItem margin={10}>
              useFormBlur - UI - Have more control over your form blur.
              (deprecated onFormBlur in react).
            </SignalListItem>
          </Appear>
        </List>
      </Slide>

      {/* LIBRARY MENTIONS */}
      <Slide progressColor="#eb5463" align="flex-start">
        <SignalHeader caps>Use These Libraries</SignalHeader>
        <Image src={images.reactUse} width={900} />
        <Cite>Vadim Dalecky [streamich]</Cite>
      </Slide>
      <Slide
        progressColor="#eb5463"
        align="flex-start"
        notes={slideNotes.debounce}
      >
        <SignalText>React-Use</SignalText>
        <List textColor="#eb5463" textFont="Helvetica">
          <SignalListItem margin={10}>useDebounce</SignalListItem>
          <Appear>
            <div>
              <CodePane
                source={useDebounce}
                lang="js"
                textSize={24}
                theme="external"
              />
            </div>
          </Appear>
        </List>
      </Slide>

      {/* USE UPDATE  */}
      <Slide
        progressColor="#eb5463"
        align="flex-start"
        notes={slideNotes.useUpdate}
      >
        <SignalText>React-Use</SignalText>
        <List textColor="#eb5463" textFont="Helvetica">
          <SignalListItem>useUpdateEffect</SignalListItem>
          <Appear>
            <div>
              <CodePane
                source={useUpdateEffect}
                lang="js"
                textSize={24}
                theme="external"
              />
            </div>
          </Appear>
        </List>
      </Slide>

      {/* CODE SLIDE - REACT ROUTER */}
      <CodeSlide
        progressColor="#eb5463"
        transition={[]}
        lang="js"
        code={routerCode}
        ranges={[
          { loc: [0, 200], title: 'Code Slide Example' },
          { loc: [0, 1], title: 'The Beginning' },
          { loc: [1, 2] },
          { loc: [1, 2], note: 'Heres a note!' },
          { loc: [2, 3] },
          { loc: [8, 10] }
        ]}
      />

      {/* Live code */}
      <Slide progressColor="#eb5463" align="flex-start" textSize={10}>
        <SignalText>useDebounce for efficient API calls</SignalText>
        <LivePreview />
      </Slide>

      {/* End */}
      <Slide progressColor="#eb5463" textSize={10}>
        <Cite>fin</Cite>
      </Slide>
    </SlideSet>
  </Deck>
);

export default Presentation;

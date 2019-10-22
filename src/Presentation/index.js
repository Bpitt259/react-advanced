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

import routerCode from '../assets/router.code';
import useDebounce from '../assets/useDebounce.code';
import useUpdateEffect from '../assets/useUpdateEffect.code';
import useFormBlur from '../assets/useFormBlur.code';
import useHover from '../assets/UseHover.code';

import LivePreview from './LivePreview';
import HoverPreview from './HoverPreview';

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
  textSize: 60,
  margin: 50
}))``;

const slideNotes = {
  opening:
    'My name is Bryan and I’m a Software Engineer at a company called Signal, we’re a company that focuses on giving PR and Comms professionals real time information with the help of AI technology.',
  challenge:
    'Our clients need access to billions of data points, and they need to be able to harness that data in a meaningful way. Whether through custom reports, real-time and scheduled alerts or analytics dashboards, how we deliver that data to our clients matters.',
  needs:
    'A large system that is also highly interactive and customizable does not come cheap in respect to performance, we aim to solve that using evolving and consistant stretegies such as fitness functions, and low overhead components, which is where hooks step in.',
  how:
    'We start with a full featured Hooks library that is still being contributed toward regularly by talented developers around the world.',
  debounce:
    'React hook that delays invoking a function until after wait milliseconds have elapsed since the last time the debounced function was invoked.',
  useUpdate:
    'React effect hook that ignores the first invocation (e.g. on mount). The signature is exactly the same as the useEffect hook.',
  useFormBlur:
    'Form blur notes here - talk about omission of selectors to exclude select fields',
  useHover: 'Expand on child elements controlling parent css / interaction'
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

      {/* CHALLENGE */}
      <Slide
        progressColor="#eb5463"
        align="flex-start"
        notes={slideNotes.challenge}
      >
        <SignalHeader caps>What we face</SignalHeader>
        <Appear>
          <SignalHeader caps textSize={300}>
            Big Forms.
          </SignalHeader>
        </Appear>
      </Slide>

      {/* WHAT WE NEED */}
      <Slide
        progressColor="#eb5463"
        align="flex-start"
        notes={slideNotes.needs}
      >
        <SignalHeader caps>What we need</SignalHeader>
        <List textColor="#eb5463" textFont="Helvetica" bulletStyle="0394">
          <Appear>
            <SignalListItem>Performant form controls.</SignalListItem>
          </Appear>
          <Appear>
            <SignalListItem>Efficient state management.</SignalListItem>
          </Appear>
          <Appear>
            <SignalListItem>Control over our UI.</SignalListItem>
          </Appear>
        </List>
      </Slide>

      {/* HOW WE DO IT */}
      <Slide progressColor="#eb5463" align="flex-start" notes={slideNotes.how}>
        <SignalHeader caps>How we do it</SignalHeader>
        <Appear>
          <Image src={images.reactUse} width={900} />
        </Appear>
      </Slide>

      {/* FORM CONTROLS - DEBOUNCE */}
      <Slide
        progressColor="#eb5463"
        align="flex-start"
        notes={slideNotes.debounce}
      >
        <SignalText>React-Use</SignalText>
        <List textColor="#eb5463" textFont="Helvetica">
          <SignalListItem margin={10}>useDebounce</SignalListItem>
          <div>
            <CodePane
              source={useDebounce}
              lang="js"
              textSize={24}
              theme="external"
            />
          </div>
        </List>
        <Cite>Vadim Dalecky [streamich]</Cite>
      </Slide>
      <Slide progressColor="#eb5463" align="flex-start" textSize={10}>
        <SignalText>useDebounce for efficient API calls</SignalText>
        <LivePreview />
      </Slide>

      {/* FORM CONTROLS - USE UPDATE  */}
      <Slide
        progressColor="#eb5463"
        align="flex-start"
        notes={slideNotes.useUpdate}
      >
        <SignalText>React-Use</SignalText>
        <List textColor="#eb5463" textFont="Helvetica">
          <SignalListItem>useUpdateEffect</SignalListItem>
          <div>
            <CodePane
              source={useUpdateEffect}
              lang="js"
              textSize={24}
              theme="external"
            />
          </div>
        </List>
        <Cite>Vadim Dalecky [streamich]</Cite>
      </Slide>

      {/* UI CONTROL -  FORM BLUR */}
      <Slide
        progressColor="#eb5463"
        align="flex-start"
        notes={slideNotes.useFormBlur}
      >
        <SignalText>UI Hooks</SignalText>
        <List textColor="#eb5463" textFont="Helvetica">
          <SignalListItem>useFormBlur</SignalListItem>
          <Appear>
            <div>
              <CodePane
                source={useFormBlur}
                lang="js"
                textSize={24}
                theme="external"
              />
            </div>
          </Appear>
        </List>
      </Slide>

      {/* UI-HOOKS HOVER */}
      <Slide
        progressColor="#eb5463"
        align="flex-start"
        notes={slideNotes.useFormBlur}
      >
        <SignalText>UI Hooks</SignalText>
        <List textColor="#eb5463" textFont="Helvetica">
          <SignalListItem>useHover</SignalListItem>
          <Appear>
            <div>
              <CodePane
                source={useHover}
                lang="js"
                textSize={20}
                theme="external"
              />
            </div>
          </Appear>
        </List>
      </Slide>
      <Slide progressColor="#eb5463" align="flex-start" textSize={10}>
        <SignalText>UI Hooks</SignalText>
        <List textColor="#eb5463" textFont="Helvetica">
          <SignalListItem>useHover</SignalListItem>
        </List>
        <HoverPreview />
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

      {/* End */}
      <Slide progressColor="#eb5463" textSize={10}>
        <Cite>fin</Cite>
      </Slide>
    </SlideSet>
  </Deck>
);

export default Presentation;

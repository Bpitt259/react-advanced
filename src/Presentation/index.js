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
  reactUse: require('../assets/images/react-use.png'),
  useHover1: require('../assets/images/usehover-why.png'),
  useHover2: require('../assets/images/usehover-why2.png'),
  jquery: require('../assets/images/jquery.png'),
  jquery2: require('../assets/images/jquery2.png'),
  imagination: require('../assets/images/imagination.gif')
};
preloader(images);
Prism.highlightAll();

const SignalHeaderOpening = styled(Heading).attrs(props => ({
  textFont: 'Impact',
  textColor: props.theme.color.red,
  size: 3,
  margin: 50
}))``;

const SignalHeader = styled(Heading).attrs(props => ({
  textFont: 'Impact',
  textColor: props.theme.color.red,
  size: 1,
  margin: 50
}))``;

const SignalHeaderWhite = styled(Heading).attrs(props => ({
  textFont: 'Impact',
  textColor: 'white',
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
  textFont: 'Helvetica',
  textSize: 60,
  margin: 25
}))``;

const SignalListWhite = styled(ListItem).attrs(props => ({
  textFont: 'Helvetica',
  textColor: 'white',
  textSize: 60,
  margin: 25
}))``;

const slideNotes = {
  opening:
    'Im Bryan, a Software Engineer at Signal. -- We focus on giving PR and Comms professionals relavent, real time information with the help of AI technology, -- but we also do a lot of cool stuff with our data.',
  challenge:
    'Our clients need access to billions of data points, and they need to be able to harness that data in a meaningful way. -- Whether through custom reports, real-time and scheduled alerts -- or analytics dashboards, how we deliver that data to our clients matters.',
  needs:
    'A large -- highly interactive system that is also customizable does not come cheap in respect to performance, -- we aim to solve that using evolving yet consistant stretegies. --  More future proof and lower overhead components is where its at, -- which is where hooks step in.',
  how:
    'We start with a full featured Hooks library that is still being contributed to regularly by talented developers around the world, -- react-use, -- and we will end with a few of our own.',
  debounce:
    'A hook that delays invoking a function -- until after a determined wait time enables us to offer saving on the fly in our forms, giving users a streamlined and reponsive experience -- while keeping load off of our APIs.',
  useUpdate:
    'Our next hook allows us to ignore the first invocation of data -- (for example componentDidMount). This allows us to keep the information displayed in our customers field up to date, but not constantly pinging our servers. -- This provided a convienent way to bypass conditional data loads in our initial render of forms.',
  useFormBlur:
    'The next few are some that we wrote before other fancy implementations of Hooks were released, yet still hold up today. The form blur allows us to explicitly omit or include selectors on a page to keep keep focus on an input group, or dropdown. We use this extensively throughout our view/edit layouts in our UI, to give you a WYSIWYG workflow. -- As youll see in these next two examples, useEffect is a convienet way to add and remove event listeners via the mount and dismount syntax',
  why:
    'The last hook id like to share was homegrown, -- but certainly isnt the only or last implementation, the usehover. -- What does this aim to solve ? -- keeping track of parent selectors via child nodes',
  useHover:
    'This hook recevives a ref from an element, and changes the state of the returned value if you are located in the  context of that node. -- We found this to be extremely helpful in setting conditional CSS on a parent via interaction with one of its children. -- This is typically hard to achieve in CSS due to not having access to a parent selector.',
  end:
    'These are a few hooks in our tackle box, and how they can help you create performant forms, and take back control of your UI. -- All thats left is your imagination.'
};

const Presentation = () => (
  <Deck transitionDuration={500} progress="bar" bgColor="black">
    <SlideSet style={{ background: '#000' }}>
      {/* INTRO */}
      <Slide progressColor="#eb5463" notes={slideNotes.opening}>
        <SignalHeaderOpening caps lineHeight={1.1}>
          React’s Tackle Box : &nbsp; Using the right hooks for the job.
        </SignalHeaderOpening>
        <SignalText>Bryan Pitt / Signal AI - London</SignalText>
      </Slide>

      {/* CHALLENGE */}
      <Slide
        progressColor="#eb5463"
        align="flex-start"
        notes={slideNotes.challenge}
      >
        <SignalHeader caps>Our Challenge</SignalHeader>
        <Appear>
          <SignalHeaderWhite>6,807 Users</SignalHeaderWhite>
        </Appear>
        <Appear>
          <SignalHeaderWhite>54,405 Reports</SignalHeaderWhite>
        </Appear>
        <Appear>
          <SignalHeaderWhite>
            Sending millions of emails a month.
          </SignalHeaderWhite>
        </Appear>
      </Slide>

      <Slide
        progressColor="#eb5463"
        align="flex-start"
        notes={slideNotes.challenge}
      >
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
            <SignalListWhite>Performant controls.</SignalListWhite>
          </Appear>
          <Appear>
            <SignalListWhite>Efficient state management.</SignalListWhite>
          </Appear>
          <Appear>
            <SignalListWhite>Control over our UI.</SignalListWhite>
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
          <CodePane
            source={useDebounce}
            lang="js"
            textSize={25}
            theme="external"
          />
        </List>
        <Cite>Vadim Dalecky [streamich]</Cite>
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
          <CodePane
            source={useUpdateEffect}
            lang="js"
            textSize={25}
            theme="external"
          />
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
          <CodePane
            source={useFormBlur}
            lang="js"
            textSize={24}
            theme="external"
          />
        </List>
      </Slide>

      <Slide progressColor="#eb5463" align="flex-start" notes={slideNotes.why}>
        <SignalHeader>Why</SignalHeader>
        <Appear>
          <Image src={images.useHover1} height={100} width={900} />
        </Appear>
        <Appear>
          <Image src={images.useHover2} height={200} width={900} />
        </Appear>
        <Appear>
          <Image src={images.jquery} height={100} width={900} />
        </Appear>
        <Appear>
          <Image src={images.jquery2} height={100} width={500} />
        </Appear>
        <Appear>
          <Cite>Stackoverflow, CSS-tricks</Cite>
        </Appear>
      </Slide>

      {/* UI-HOOKS HOVER */}
      <Slide
        progressColor="#eb5463"
        align="flex-start"
        notes={slideNotes.useHover}
      >
        <SignalText>UI Hooks</SignalText>
        <List textColor="#eb5463" textFont="Helvetica">
          <SignalListItem>useHover</SignalListItem>
          <CodePane
            source={useHover}
            lang="js"
            textSize={20}
            theme="external"
          />
        </List>
      </Slide>

      {/* End */}
      <Slide progressColor="#eb5463" textSize={10} notes={slideNotes.end}>
        <Image src={images.imagination} height="100%" width="100%" />
      </Slide>
    </SlideSet>
  </Deck>
);

export default Presentation;

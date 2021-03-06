import React from 'react';
import styled from 'styled-components';

import { SignalButton } from './Index';

const images = [
  { id: 1, src: `${require('../assets/images/game/1.jpg')}` },
  { id: 2, src: `${require('../assets/images/game/2.jpg')}` },
  { id: 3, src: `${require('../assets/images/game/3.jpg')}` },
  { id: 4, src: `${require('../assets/images/game/4.jpg')}` },
  { id: 5, src: `${require('../assets/images/game/5.jpg')}` },
  { id: 6, src: `${require('../assets/images/game/6.jpg')}` },
  { id: 7, src: `${require('../assets/images/game/7.jpg')}` },
  { id: 8, src: `${require('../assets/images/game/8.jpg')}` },
  { id: 9, src: `${require('../assets/images/game/9.jpg')}` }
];

const ImageGameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageGrid = styled.div`
  align-self: center;
  display: grid;

  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
`;

const ImageFlex = styled.div`
  display: flex;
  flex-diretion: row;
  flex-wrap: row;
`;

const ImageEl = styled.img`
  justify-self: stretch;
`;

/* READ FIRST READ FIRST READ FIRSTREAD FIRSTREAD FIRSTREAD FIRSTREAD FIRSTREAD FIRST */
// This challenege is more a trick. Remove (or replace) elements in the Javascript & CSS to unscramble our friend Joe.

function shuffleImage(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function(props) {
  shuffleImage(images);

  const renderImage = () =>
    images.map(i => <ImageEl key={i.id} src={i.src} alt="piece" />);

  return (
    <ImageGameWrapper>
      <div style={{ width: '300px', alignSelf: 'center' }}>
        <SignalButton
          variant="contained"
          color="primary"
          onClick={() => props.history.push('/image-game-solution')}
        >
          Show Solution
        </SignalButton>
      </div>
      <ImageGrid>{renderImage()}</ImageGrid>
    </ImageGameWrapper>
  );
}

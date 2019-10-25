import React from 'react';
import styled from 'styled-components';

import { Text } from './Index';

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

  grid-template-columns: repeat(3, 1fr);
`;

const ImageFlex = styled.div`
  display: flex;
  flex-diretion: row;
  flex-wrap: row;
`;

const ImageEl = styled.img`
  justify-self: stretch;
`;

export default function(props) {
  const renderImage = () =>
    images.map(i => <ImageEl key={i.id} src={i.src} alt="piece" />);

  return (
    <ImageGameWrapper>
      <Text>Removed Array: shuffleImage(images);</Text>
      <Text>
        Adjusted the Grid element.
        {`change'row' to 'column' -> grid-template-columns: repeat(3, 1fr); 
        remove -> grid-auto-flow;`}
      </Text>
      <ImageGrid>{renderImage()}</ImageGrid>
    </ImageGameWrapper>
  );
}

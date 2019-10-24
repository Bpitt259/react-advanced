import React, { useState } from 'react';
import styled from 'styled-components';

import useHover from './useHover';
import Modal from '../components/Modal';

const OuterDiv = styled.div`
  border: 1px solid ${props => props.theme.color.red};
  background-color: ${props =>
    props.isHovered ? props.theme.color.red : 'white'};

  display: flex;
  flex-direction: row;

  width: 500px;
  height: 100px;
`;

const InnerDiv = styled.div`
  background-color: ${props => props.theme.color.blue};

  margin: 0 20px;

  width: 200px;
`;

const StyledImage = styled.img`
  align-self: center;
  display: flex;

  width: 100%;
  height: 100%;
`;

const gif = require('../assets/images/spoingebob-magic.gif');

const HoverElement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverRef, isHovered] = useHover();

  return (
    <div>
      <OuterDiv isHovered={isHovered}>
        parent
        <InnerDiv ref={hoverRef} onClick={() => setIsOpen(true)}>
          child
        </InnerDiv>
        parent
      </OuterDiv>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <StyledImage src={gif} />
      </Modal>
    </div>
  );
};

export default HoverElement;

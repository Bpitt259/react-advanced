import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import useHover from './useHover';

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

const HoverElement = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <OuterDiv isHovered={isHovered}>
      Outer things
      <InnerDiv ref={hoverRef}>inner</InnerDiv>
      Other things
    </OuterDiv>
  );
};

export default HoverElement;

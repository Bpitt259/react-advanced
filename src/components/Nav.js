import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;

  background-color: ${props => props.theme.color.signalRed};

  width: 100%;

  * > {
    :not(:first-child) {
      margin-left: 10px;
    }
  }
`;

const NavItem = styled(Link)`
  border: 1px solid ${props => props.theme.color.signalGrey};
  background-color: white;
  color: ${props => props.theme.color.signalGrey};

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  height: 50px;
  width: 100px;

  cursor: pointer;
`;

const Nav = ({ text }) => {
  return (
    <NavWrapper>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/game">The Game</NavItem>
      <NavItem to="/presentation">Presentation</NavItem>
    </NavWrapper>
  );
};

export default Nav;

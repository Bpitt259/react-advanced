import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;

  border-bottom: 1px solid ${props => props.theme.color.red};
  padding-bottom: 10px;

  margin: 20px;

  > {
    :not(:first-child) {
      margin-left: 50px;
    }
  }
`;

const NavItem = styled(NavLink)`
  color: ${props => props.theme.color.red};
  font-size: ${props => props.theme.font.size.medium};
  text-decoration: none;

  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const StyledDiv = styled.div`
  color: ${props => props.theme.color.red};

  font-size: ${props => props.theme.font.size.medium};
  font-style: italic;
`;

const Nav = () => {
  const location = useLocation();
  return location.pathname === '/presentation' ||
    location.pathname === '/image-game' ||
    location.pathname === '/game' ? null : (
      <NavWrapper>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/game">The Game</NavItem>
        <NavItem to="/presentation">Presentation</NavItem>
        <NavItem to="/features">Features</NavItem>
        <StyledDiv>{`current location: ${location.pathname}`}</StyledDiv>
      </NavWrapper>
  );
};

export default Nav;

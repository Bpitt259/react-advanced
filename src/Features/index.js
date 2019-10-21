import React, { useState, useEffect } from 'react';
import {
  useRouteMatch,
  useParams,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import styled from 'styled-components';

import HoverElement from './HoverElement';

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;

  height: 400px;
  width: 300px;
  li {
    :not(:first-child) {
      margin-top: 10px;
    }
  }
`;

const ListItem = styled(Link)`
  color: ${props => props.theme.color['grey-600']};
  font-size: ${props => props.theme.font.size.small};
  text-decoration: none;

  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const RouterHooks = () => {
  const { feature } = useParams();
  let component;
  switch (feature) {
    case 'use-hover':
      component = <HoverElement />;
      break;
    default:
      return null;
  }
  return component;
};

const Features = () => {
  const { feature } = useParams();
  const { path, url } = useRouteMatch();
  return (
    <FeatureWrapper>
      <h3>Features</h3>

      <List>
        <li>
          <ListItem to={`${url}/router-hooks`}>router hooks</ListItem>
        </li>
        <li>
          <ListItem to={`${url}/form-hooks`}>form hooks</ListItem>
        </li>
        <li>
          <ListItem to={`${url}/use-hover`}>useHover</ListItem>
        </li>
      </List>

      <Switch>
        <Route path={`${path}/:feature`}>
          <RouterHooks />
        </Route>
      </Switch>
    </FeatureWrapper>
  );
};

export default Features;

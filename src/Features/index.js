import React, { useState, useEffect } from 'react';
import {
  useRouteMatch,
  useParams,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import styled from 'styled-components';

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
  color: ${props => props.theme.color.signalGrey};
  font-size: ${props => props.theme.font.size.small};
  text-decoration: none;

  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const RouterHooks = () => {
  const { feature } = useParams();
  return (
    <div>
      <h3>{feature}</h3>
    </div>
  );
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
          <ListItem to={`${url}/ui-hooks`}>UI hooks</ListItem>
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

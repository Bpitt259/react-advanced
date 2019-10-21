import React from 'react';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import UserInput from '../Features/UserInput';

const scope = { styled, UserInput };

const code = `
  <UserInput />
`;

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  width: 100%;
`;

export default function() {
  return (
    <LiveProvider code={code} scope={scope} language="jsx">
      <EditorWrapper>
        <LiveEditor style={{ flex: 1, fontSize: 24, padding: 20 }} />
        <LivePreview style={{ flex: 1 }} />
      </EditorWrapper>
      <LiveError style={{ fontColor: 'red' }} />
    </LiveProvider>
  );
}

import React from 'react';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import HoverElement from '../Features/HoverElement';

const scope = { styled, HoverElement };

const code = `
  <HoverElement />
`;

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  margin-top: 100px;
  width: 100%;
`;

export default function({ component }) {
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

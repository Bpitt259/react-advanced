import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDebounce } from 'react-use';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: black;

  width: 500px;
`;

const StyledInput = styled.input`
  color: black;

  height: 50px;
  width: 100%;
`;

const Text = styled.p`
  color: ${props => props.theme.color.red};

  font-size: ${props => props.theme.font.size.large};
`;

function UserInput() {
  const [status, setStatus] = React.useState('');
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useDebounce(
    () => {
      setStatus('Settings have been saved!');
      setDebouncedValue(inputValue);
    },
    2000,
    [inputValue]
  );

  function handleOnChange(e) {
    setStatus('Saving your Changes...');
    setInputValue(e.target.value);
  }

  return (
    <InputWrapper>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={e => handleOnChange(e)}
      />
      <Text>{inputValue}</Text>
      <Text>{status}</Text>
      <Text>
        Saved Value:
        {debouncedValue}
      </Text>
    </InputWrapper>
  );
}

export default UserInput;

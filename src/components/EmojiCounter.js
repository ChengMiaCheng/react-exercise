import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    margin-top:120px;
`

const Counter = styled.div`
    font-size: 30px;
    font-style: italic;
`
const ButtonContainer = styled.div`
    margin: 30px 0;
    font-size: 24px;
    padding: 30px;
`

const EmojiButton = styled.button`
    font-size: 40px;
    padding: 20px;
`

const ResetButton = styled.button`
    font-size: 30px;
    border: none;
   
`

function EmojiCounter() {
  const [counter, setCounter] = useState(0);

  function handleReset() {
    setCounter(0);
  }

  return (
    <PageContainer className="counter-container">
      <Counter>{counter}</Counter>
      <ButtonContainer>
        <EmojiButton onClick={() => setCounter(counter + 1)}>😃</EmojiButton>
        <EmojiButton onClick={() => setCounter(counter - 1)}>😝</EmojiButton>
      </ButtonContainer>

      <ResetButton onClick={handleReset}>🔄</ResetButton>
    </PageContainer>
  );
}

export default EmojiCounter;
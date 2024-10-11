import React, { useState } from 'react';
import styled, { css } from 'styled-components';

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
const commonButtonStyles = css`
    font-size: 40px;
    padding: 20px;
    background: white;
    border: 1px solid #000;
    cursor: pointer;
    
    :hover {
        background: burlywood;
    }
    
    :active {
        opacity: 0.7;
    }
`

const EmojiButtonLeft = styled.button`
   ${commonButtonStyles};
    border-right: none;
    border-radius: 15px 0 0 15px;
    
`

const EmojiButtonRight = styled.button`
    ${commonButtonStyles};
    border-radius: 0 15px 15px 0;
    
`

const ResetButton = styled.div`
    font-size: 30px;
    border: none;
   
`

function EmojiCounter () {
  const [counter, setCounter] = useState(0);

  const INITIAL_STATE = 0
  const handleReset = () => {
    setCounter(INITIAL_STATE);
  }

  const handleChange = (isIncrement) =>{
    setCounter( isIncrement ? counter+1 : counter-1)
  }

  return (
    <PageContainer className="counter-container">
      <Counter className="count">{counter}</Counter>
      <ButtonContainer>
        <EmojiButtonLeft onClick={() => handleChange(true)}>😃</EmojiButtonLeft>
        <EmojiButtonRight onClick={() => handleChange(false)}>😝</EmojiButtonRight>
      </ButtonContainer>

      <ResetButton onClick={handleReset} role="button">🔄</ResetButton>
    </PageContainer>
  );
}

export default EmojiCounter;
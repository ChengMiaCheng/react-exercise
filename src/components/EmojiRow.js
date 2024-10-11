import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EmojiRow = ({ emoji }) => {
  const { character, unicodeName, codePoint, slug } = emoji;
  return (
    <Link to={`/emoji/${slug}`}>
      <EmojiRowContainer>
        <EmojiAndName>
          <EmojiCharacter>{character}</EmojiCharacter>
          {unicodeName}
        </EmojiAndName>
        <div>{codePoint}</div>
      </EmojiRowContainer>
    </Link>
  );
};

const EmojiRowContainer = styled.div`
  margin: 0 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
  font-size: 16px;

  cursor: pointer;

  :hover {
    background: pink;
  }
`;

const EmojiAndName = styled.div`
  display: flex;
`;

const EmojiCharacter = styled.div`
  padding: 0 5px;
  font-size: 20px;
`;

import React, { useState } from 'react';
import { Input, Loader } from 'semantic-ui-react';
import styled from 'styled-components';
import { EmojiRow } from './EmojiRow';
import debounce from 'lodash.debounce';
import { fetchEmojis } from '../api/emoji';

function EmojiFinder() {
  const [emojis, setEmojis] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const debouncedGetEmojis = debounce(
    (searchText) => getEmojis(searchText),
    500,
  );

  const getEmojis = async (searchText) => {
    setIsLoading(true);
    const filteredEmojis = await fetchEmojis(searchText);
    setEmojis(filteredEmojis);
    setIsLoading(false);
  };

  return (
    <PageContainer>
      <SearchContainer>
        <Input
          fluid
          icon="search"
          focus
          placeholder="Search..."
          onChange={(e) => {
            debouncedGetEmojis(e.target.value);
          }}
        />
        <EmojiContainer>
          {isLoading ? (
            <Loader active inline='centered'/>
          ) : (
            emojis.map((emoji) => {
              return <EmojiRow emoji={emoji} key={emoji.codePoint} />;
            })
          )}
        </EmojiContainer>
      </SearchContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 120px;
`;

const SearchContainer = styled.div`
  width: 50%;
`;

const EmojiContainer = styled.div`
  margin-top: 10px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 5px;

  div:last-child {
    border-bottom: 0;
  }
`;
export default EmojiFinder;

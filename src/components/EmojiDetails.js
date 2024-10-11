import { useEffect, useState } from 'react';
import { fetchEmoji } from '../api/emoji';
import { List, Placeholder, PlaceholderLine, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function  EmojiDetails() {
  const {slug} = useParams()
  const [emoji, setEmoji] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchEmoji(slug)
      .then((res) => {
        setEmoji(res[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [slug]);

  return (
    <Wrapper>
      {isLoading ? (
        <Placeholder>
          <PlaceholderLine></PlaceholderLine>
          <PlaceholderLine></PlaceholderLine>
          <PlaceholderLine></PlaceholderLine>
          <PlaceholderLine></PlaceholderLine>
        </Placeholder>
      ) : (
        <Segment>
          <List divided relaxed>
            {Object.keys(emoji).map((key) => {
              return (
                <List.Item >
                  <List.Header>
                    {key.replace(key.charAt(0), key.charAt(0).toUpperCase())}
                  </List.Header>
                  {emoji[key]}
                </List.Item>
              )
            })}
          </List>
        </Segment>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 100px 25%;
`;

export default EmojiDetails

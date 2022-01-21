import styled from '@emotion/styled';
import { useEffect } from 'react';

const Div = styled.div`
  width: 80%;
  height: 100px;
  overflow: scroll;
  display: flex;
  flex-flow: nowrap;
`;

export default function AvailableMemes({
  memeData,
  setMemeData,
  setMemeImage,

  setCustomMeme,
}) {
  useEffect(() => {
    async function getMemes() {
      const fetchResponse = await fetch('https://api.memegen.link/templates');
      const data = await fetchResponse.json();
      setMemeData(data);
    }
    void getMemes();
  }, [setMemeData]);

  const memeUrls = Object.values(memeData).map((item) => item.blank);

  //

  return (
    <Div>
      {memeUrls.map((url) => {
        return (
          <button
            key={url}
            onClick={() => {
              setMemeImage(url);
              setCustomMeme('');
            }}
          >
            <img
              src={url}
              alt="a meme"
              height="100px"
              data-test-id="meme-image"
            />{' '}
          </button>
        );
      })}
    </Div>
  );
}

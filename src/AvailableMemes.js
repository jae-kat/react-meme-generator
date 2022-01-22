import styled from '@emotion/styled';
import { useEffect } from 'react';

const Div = styled.div`
  width: 80%;
  height: 100px;
  overflow: scroll;
  display: flex;
  flex-flow: nowrap;
`;
const Img = styled.img``;

export default function AvailableMemes({ memeData, setMemeData, setId }) {
  // fetch the data from the API
  useEffect(() => {
    async function getMemes() {
      const fetchResponse = await fetch('https://api.memegen.link/templates');
      const data = await fetchResponse.json();
      setMemeData(data);
    }
    void getMemes();
  }, [setMemeData]);

  // store the relevant data in an array (the url to the memes, as well as their names and ids
  const memeObject = Object.values(memeData).map((item) => ({
    url: item.blank,
    name: item.name,
    id: item.id,
  }));

  return (
    // create an <img /> for each meme. clicking on it sets the id (which we need to create the customMeme)
    <Div>
      {memeObject.map((meme) => {
        return (
          <button
            key={meme.name}
            onClick={() => {
              setId(meme.id);
            }}
          >
            <Img
              src={meme.url}
              alt={`meme template '${meme.name}'`}
              height="100px"
              data-test-id="meme-image"
            />
          </button>
        );
      })}
    </Div>
  );
}

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
  setId,
  setTemplate,
}) {
  useEffect(() => {
    async function getMemes() {
      const fetchResponse = await fetch('https://api.memegen.link/templates');
      const data = await fetchResponse.json();
      setMemeData(data);
    }
    void getMemes();
  }, [setMemeData]);

  const memeObject = Object.values(memeData).map((item) => ({
    url: item.blank,
    name: item.name,
    id: item.id,
  }));

  return (
    <Div>
      {memeObject.map((meme) => {
        return (
          <button
            key={meme.name}
            onClick={() => {
              setId(meme.id);
              setTemplate('');
            }}
          >
            <img
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

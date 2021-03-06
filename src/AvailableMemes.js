import styled from '@emotion/styled';
import { useState } from 'react';

const Container = styled.div`
  width: 80vw;
  height: 130px;
  display: flex;
  margin: 2vh;
  border: 4px solid black;
  border-radius: 10px;
`;

const Div = styled.div`
  overflow: hidden;
  width: 80vw;
  align-items: space-evenly;
`;

const Button = styled.button`
  background-color: black;
  color: white;
`;

export default function AvailableMemes({ memeData, setId }) {
  // these are needed for the 'back' and 'next' buttons
  const [indexHigh, setIndexHigh] = useState(6);
  const [indexLow, setIndexLow] = useState(0);

  // store the relevant data in an array (the url to the memes, as well as their names and ids
  const memeObject = Object.values(memeData).map((item) => ({
    url: item.blank,
    name: item.name,
    id: item.id,
  }));

  // narrow the array down, so only a small number of images are displayed on the page
  const memeObjectImages = memeObject.filter(
    (item, index) => index < indexHigh && index > indexLow,
  );

  return (
    // create an <img /> for each meme. clicking on it sets the id (which we need to create the customMeme)
    <Container>
      <Button
        className="click"
        onClick={() => {
          setIndexHigh(indexHigh - 6);
          setIndexLow(indexLow - 6);
        }}
      >
        Back
      </Button>
      {memeObjectImages.map((meme) => {
        return (
          <Div
            key={meme.name}
            role="button"
            tabIndex={0}
            onKeyPress={() => {
              setId(meme.id);
            }}
            onClick={() => {
              setId(meme.id);
            }}
          >
            <img
              src={meme.url}
              alt={`meme template '${meme.name}'`}
              height="130px"
            />
          </Div>
        );
      })}
      <Button
        className="click"
        onClick={() => {
          setIndexHigh(indexHigh + 6);
          setIndexLow(indexLow + 6);
        }}
      >
        Next
      </Button>
    </Container>
  );
}

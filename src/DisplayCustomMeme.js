import styled from '@emotion/styled';

const Div = styled.div`
  height: 50vh;
  width: 40vw;
  border: 4px solid black;
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  margin: 5vh;
  height: 40vh;
`;

export default function DisplayCustomMeme({ customMeme, memeImage }) {
  return (
    <Div>
      {(customMeme || memeImage) && (
        <Img
          src={customMeme ? customMeme : memeImage}
          alt="random meme"
          data-test-id="meme-image"
        />
      )}
    </Div>
  );
}

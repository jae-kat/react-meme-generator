import styled from '@emotion/styled';

const Div = styled.div`
  height: 50vh;
  width: auto;
  border: 4px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px;
  display: flex;
  justify-content: center;
  margin-left: 10%;
  background-color: #a382e5;
`;
const Img = styled.img`
  margin: 5vh;
  height: 40vh;
`;

// create and <img/> that will show our customized meme
export default function DisplayCustomMeme({ customMeme }) {
  return (
    <Div>
      <Img src={customMeme} alt="random meme" data-test-id="meme-image" />
    </Div>
  );
}

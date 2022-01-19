import './App.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import Inputs from './Inputs';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const Img = styled.img`
  height: 30vh;
`;

function App() {
  const [allMemes, setAllMemes] = useState('');

  const url = 'https://api.memegen.link/templates';

  function handleChange() {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setAllMemes(result);
        },
        (err) => {
          console.log(err);
        },
      );
  }
  const memeArray = Object.values(allMemes);
  const memeUrls = memeArray.map((item) => item.blank);

  return (
    <Container>
      <p>Hello!</p>
      <button onClick={handleChange}>random meme template</button>
      <Img
        src={memeUrls[Math.floor(Math.random() * 172)]}
        alt="a random meme"
      />
      <Inputs memes={memeUrls} />
    </Container>
  );
}

export default App;

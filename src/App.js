import './App.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import Inputs from './Inputs';
import MemeGenerator from './MemeGenerator';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
// const Img = styled.img`
//   height: 100px;
// `;
// const Templates = styled.div`
//   width: 80%;
//   height: 100px;
//   overflow: scroll;
// `;

function App() {
  // const [allMemes, setAllMemes] = useState('');

  // const url = 'https://api.memegen.link/templates';

  // function handleChange() {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setAllMemes(result);
  //       },
  //       (err) => {
  //         console.log(err);
  //       },
  //     );
  // }
  // const memeArray = Object.values(allMemes);
  // const memeUrls = memeArray.map((item) => item.blank);

  return (
    <Container>
      <h1>memes</h1>
      <MemeGenerator />
      {/* <p>Hello!</p>
      <button onClick={handleChange}>random meme template</button>
      <Templates>
        {memeUrls
          .filter((item, index) => index < 8)
          .map((link) => {
            return <Img src={link} alt="a random meme" key={link} />;
          })}
      </Templates>
      <Inputs memes={memeUrls} /> */}
    </Container>
  );
}

export default App;

import './App.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import AvailableMemes from './AvailableMemes';
import DisplayCustomMeme from './DisplayCustomMeme';
import Download from './Download';
import Template from './Template';
import TextInput from './TextInput';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

function App() {
  const [memeData, setMemeData] = useState('');
  const [template, setTemplate] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImage, setMemeImage] = useState('');
  const [customMeme, setCustomMeme] = useState('');

  return (
    <Container>
      <h1>meme generator</h1>
      <Template
        template={template}
        setTemplate={setTemplate}
        setMemeImage={setMemeImage}
        setCustomMeme={setCustomMeme}
      />

      <AvailableMemes
        memeData={memeData}
        setMemeData={setMemeData}
        setMemeImage={setMemeImage}
        customMeme={customMeme}
        setCustomMeme={setCustomMeme}
        memeImage={memeImage}
      />

      <DisplayCustomMeme customMeme={customMeme} memeImage={memeImage} />

      <TextInput
        memeImage={memeImage}
        topText={topText}
        setTopText={setTopText}
        bottomText={bottomText}
        setBottomText={setBottomText}
        setCustomMeme={setCustomMeme}
      />

      <Download customMeme={customMeme} memeImage={memeImage} />
    </Container>
  );
}

export default App;

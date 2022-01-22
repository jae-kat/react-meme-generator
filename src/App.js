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
  const [id, setId] = useState(() => {
    // show a random meme template on initial render
    const firstMemeImages = [
      'biw',
      'cryingfloor',
      'doge',
      'buzz',
      'kombucha',
      'boat',
      'fine',
      'snek',
      'wonka',
      'persian',
    ];
    return firstMemeImages[Math.floor(Math.random() * 10)];
  });

  // this defines the URL for the image the meme generator displays
  // either a customized meme, or an empty template picture before words are added
  const customMeme =
    'https://api.memegen.link/images/' +
    id +
    (topText ? '/' + topText : '/_') +
    (bottomText ? '/' + bottomText : '/_') +
    '.png';

  return (
    <Container>
      <h1>meme generator</h1>
      <Template template={template} setTemplate={setTemplate} setId={setId} />

      <AvailableMemes
        memeData={memeData}
        setMemeData={setMemeData}
        setId={setId}
        setTemplate={setTemplate}
      />

      <DisplayCustomMeme customMeme={customMeme} />

      <TextInput
        topText={topText}
        setTopText={setTopText}
        bottomText={bottomText}
        setBottomText={setBottomText}
      />

      <Download customMeme={customMeme} />
    </Container>
  );
}

export default App;

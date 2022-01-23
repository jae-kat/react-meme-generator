import './App.css';
import { useState } from 'react';
import AvailableMemes from './AvailableMemes';
import DisplayCustomMeme from './DisplayCustomMeme';
import Download from './Download';
import Template from './Template';
import TextInput from './TextInput';

function App() {
  const [memeData, setMemeData] = useState('');
  const [template, setTemplate] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [id, setId] = useState(() => {
    // show one of these meme templates on initial render
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
    <div className="contentBox">
      <h1>Meme Generator</h1>
      <Template template={template} setTemplate={setTemplate} setId={setId} />

      <AvailableMemes
        memeData={memeData}
        setMemeData={setMemeData}
        setId={setId}
      />

      <div className="grid">
        <DisplayCustomMeme customMeme={customMeme} className="meme" />

        <div className="flex">
          <TextInput
            className="input"
            topText={topText}
            setTopText={setTopText}
            bottomText={bottomText}
            setBottomText={setBottomText}
          />
          <Download customMeme={customMeme} className="download" />
          <p>
            API: <a href="https://memegen.link/">Memegen.link</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

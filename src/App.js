import './App.css';
import { useEffect, useState } from 'react';
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
    (topText ? '/' + topText : '') +
    (!bottomText ? '' : !topText ? '/_/' + bottomText : '/' + bottomText) +
    '.png';

  // fetch the data from the API
  useEffect(() => {
    async function getMemes() {
      const fetchResponse = await fetch('https://api.memegen.link/templates');
      const data = await fetchResponse.json();
      setMemeData(data);
    }
    getMemes().catch((error) => console.log(error));
  }, [setMemeData]);

  return (
    <div className="contentBox">
      <h1>Meme Generator</h1>
      <Template template={template} setTemplate={setTemplate} setId={setId} />

      <AvailableMemes memeData={memeData} setId={setId} />

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

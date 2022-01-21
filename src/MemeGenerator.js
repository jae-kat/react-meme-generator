import styled from '@emotion/styled';
import { saveAs } from 'file-saver';
import { useEffect, useState } from 'react';

const Div = styled.div`
  width: 80%;
  height: 100px;
  overflow: scroll;
  display: flex;
  flex-flow: nowrap;
`;

export default function MemeGenerator() {
  const [memeData, setMemeData] = useState('');
  const [template, setTemplate] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [chosenMeme, setChosenMeme] = useState('');
  const [customMeme, setCustomMeme] = useState('');

  useEffect(() => {
    async function getMemes() {
      const fetchResponse = await fetch('https://api.memegen.link/templates');
      const data = await fetchResponse.json();
      setMemeData(data);
    }
    void getMemes();
  }, []);

  function handleText() {
    setCustomMeme(
      () =>
        chosenMeme.slice(0, -4) +
        (topText ? '/' + topText : '/_') +
        ('/' + bottomText) +
        '.png',
    );
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setCustomMeme(
        () => 'https://api.memegen.link/images/' + template + '.png',
      );
      setChosenMeme('https://api.memegen.link/images/' + template + '.png');
    }
  }

  function downloadImage() {
    saveAs(chosenMeme, 'CustomMeme.jpg'); // Put your image url here.
  }

  const memeUrls = Object.values(memeData).map((item) => item.blank);

  //

  return (
    <>
      <Div>
        {memeUrls
          .filter((item, index) => index < 90)
          .map((url) => {
            return (
              <button
                key={url}
                onClick={() => {
                  setCustomMeme(url);
                  setChosenMeme(url);
                }}
              >
                <img
                  src={url}
                  alt="a meme"
                  height="100px"
                  data-test-id="meme-image"
                />{' '}
              </button>
            );
          })}
      </Div>
      <label>
        Meme template{' '}
        <input
          onChange={(event) => setTemplate(event.target.value)}
          value={template}
          onKeyPress={handleKeyPress}
        />
      </label>
      <button
        onClick={() => {
          setCustomMeme(
            () => 'https://api.memegen.link/images/' + template + '.png',
          );
          setChosenMeme('https://api.memegen.link/images/' + template + '.png');
        }}
      >
        Search for meme
      </button>

      {(customMeme || chosenMeme) && (
        <img
          src={customMeme ? customMeme : chosenMeme}
          alt="random meme"
          height="200px"
          data-test-id="meme-image"
        />
      )}
      <label>
        Top text{' '}
        <input
          onChange={(event) => setTopText(event.target.value)}
          value={topText}
        />
      </label>
      <label>
        Bottom text{' '}
        <input
          onChange={(event) => setBottomText(event.target.value)}
          value={bottomText}
        />
      </label>
      <button onClick={handleText}>Add my text</button>

      <button onClick={downloadImage}>Download</button>
    </>
  );
}

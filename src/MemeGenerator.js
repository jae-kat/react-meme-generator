import styled from '@emotion/styled';
import { useState } from 'react';

const Div = styled.div`
  width: 80%;
  height: 100px;
  overflow: scroll;
  display: flex;
  flex-flow: nowrap;
  background-color: oldlace;
`;

export default function MemeGenerator() {
  const [memeData, setMemeData] = useState('');
  const [template, setTemplate] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [chosenMeme, setChosenMeme] = useState('');
  const [finishedMeme, setFinishedMeme] = useState('');

  async function getMemes() {
    const fetchResponse = await fetch('https://api.memegen.link/templates');
    const data = await fetchResponse.json();
    setMemeData(data);
  }

  function handleChange() {
    setFinishedMeme(
      chosenMeme.slice(0, -4) + '/' + topText + '/' + bottomText + '.png',
    );
  }

  const memeUrls = Object.values(memeData).map((item) => item.blank);

  //

  return (
    <>
      <button onClick={getMemes}>Show templates</button>
      <Div>
        {memeUrls
          .filter((item, index) => index < 90)
          .map((url) => {
            return (
              <button key={url} onClick={() => setChosenMeme(url)}>
                <img src={url} alt="a meme" height="100px" />{' '}
              </button>
            );
          })}
      </Div>
      <label>
        Meme template{' '}
        <input
          onChange={(event) => setTemplate(event.target.value)}
          value={template}
        />
      </label>
      <button
        onClick={() =>
          setChosenMeme(
            () => 'https://api.memegen.link/images/' + template + '.png',
          )
        }
      >
        Search for meme
      </button>

      <img src={chosenMeme} alt="random meme" height="200px" />
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
      <button onClick={handleChange}>Add my text</button>
      <img src={finishedMeme} alt="your meme" />
      {/* <button>
        <a
          href="https://api.memegen.link/images/buzz/memes/memes_everywhere.gif"
          download
        >
          Download
        </a>
      </button> */}
    </>
  );
}

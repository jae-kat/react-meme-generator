import styled from '@emotion/styled';
import { useState } from 'react';

const Fragment = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const Label = styled.label`
  margin: 2%;
`;

export default function Inputs({ memes }) {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('');
  const [customMeme, setCustomMeme] = useState('');

  // function handleChange() {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       background: 'https://api.memegen.link/images/doge.png',
  //       style: 'string',
  //       text_lines: ['hello', 'world'],
  //       extension: 'string',
  //       redirect: true,
  //     }),
  //   };
  //   fetch('https://api.memegen.link/images/custom', requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => setCustomMeme(data))
  //     .catch((err) => console.log(err));
  // }

  return (
    <Fragment>
      <label>
        Meme template
        <input
          onChange={(event) => setTemplate(event.target.value)}
          value={template}
        />
      </label>
      <img
        src={memes.filter((url) => url.includes({ template }))}
        alt="chosen meme template"
        height="100px"
      />
      <Label>
        Top text
        <input
          onChange={(event) => setTopText(event.target.value)}
          value={topText}
        />
      </Label>
      <label>
        Bottom text
        <input
          onChange={(event) => setBottomText(event.target.value)}
          value={bottomText}
        />
      </label>
      {/* <div>
        <img src={customMeme} alt="your custom meme" />
        I'll show the custom meme here??! {console.log(customMeme)}
      </div>
      <button onClick={handleChange}>Click for a meme</button> */}
    </Fragment>
  );
}

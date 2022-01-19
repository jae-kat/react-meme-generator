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

  const userTemplate = memes.filter((url) => url.includes({ template }));

  return (
    <Fragment>
      <label>
        Meme template
        <input
          onChange={(event) => setTemplate(event.target.value)}
          value={template}
        />
      </label>
      <img src={userTemplate} alt="Meme template chosen by the user" />
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
    </Fragment>
  );
}

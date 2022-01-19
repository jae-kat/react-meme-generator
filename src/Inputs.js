import { useState } from 'react';

export default function Inputs({ memes }) {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('');

  const userTemplate = memes.filter((url) => url.includes({ template }));

  return (
    <fragment>
      <label>
        Meme template
        <input
          onChange={(event) => setTemplate(event.target.value)}
          value={template}
        />
      </label>
      <img src={userTemplate} alt="Meme template chosen by the user" />
      <label>
        Top text
        <input
          onChange={(event) => setTopText(event.target.value)}
          value={topText}
        />
      </label>
      <label>
        Bottom text
        <input
          onChange={(event) => setBottomText(event.target.value)}
          value={bottomText}
        />
      </label>
    </fragment>
  );
}

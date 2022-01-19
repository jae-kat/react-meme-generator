import './App.css';
import { useState } from 'react';
import Inputs from './Inputs';

function App() {
  const [allMemes, setAllMemes] = useState('');

  const url = 'https://api.memegen.link/templates';

  function handleChange() {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setAllMemes(result);
        },
        (err) => {
          console.log(err);
        },
      );
  }
  const memeArray = Object.values(allMemes);
  const memeUrls = memeArray.map((item) => item.blank);

  return (
    <div>
      <p>Hello!</p>
      <button onClick={handleChange}>meme template</button>
      <img
        src={memeUrls[Math.floor(Math.random() * 172)]}
        alt="a random meme"
      />
      <Inputs memes={memeUrls} />
    </div>
  );
}

export default App;

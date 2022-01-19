import './App.css';
import { useState } from 'react';

function App() {
  const [allMemes, setAllMemes] = useState();

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
      <button onClick={handleChange}>Gimme a meme</button>
      <img
        src={memeUrls[Math.floor(Math.random() * 172)]}
        alt="a random meme"
      />
    </div>
  );
}

export default App;

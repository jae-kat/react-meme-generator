export default function Template({
  template,
  setTemplate,
  setMemeImage,
  setCustomMeme,
}) {
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setMemeImage(
        () => 'https://api.memegen.link/images/' + template + '.png',
      );
      setCustomMeme(() => '');
    }
  }

  return (
    <>
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
          setMemeImage(
            () => 'https://api.memegen.link/images/' + template + '.png',
          );
        }}
      >
        Search for meme
      </button>
    </>
  );
}

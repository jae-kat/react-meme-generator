export default function Template({ template, setTemplate, setId }) {
  // when the input field is selected and the user hits the Enter key, their meme will be selected and shown
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setId(template);
    }
  }

  return (
    // input field for the user to select a meme template. the value is updated while typing.
    // but only upon hitting Enter or clicking the button, will the id (=> and customMeme) update
    <>
      <label>
        Meme template{' '}
        <input
          onChange={(event) => setTemplate(event.target.value)}
          onKeyPress={handleKeyPress}
        />
      </label>
      <button
        onClick={() => {
          setId(template);
        }}
      >
        Search for meme
      </button>
    </>
  );
}

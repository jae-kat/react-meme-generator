export default function Template({ template, setTemplate, setId }) {
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setId(template);
    }
  }

  return (
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

export default function Template({ template, setTemplate, setId }) {
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setId('');
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
          setId('');
        }}
      >
        Search for meme
      </button>
    </>
  );
}

export default function TextInput({
  memeImage,
  topText,
  setTopText,
  bottomText,
  setBottomText,
  setCustomMeme,
}) {
  function handleText() {
    setCustomMeme(
      () =>
        memeImage.slice(0, -4) +
        (topText ? '/' + topText : '/_') +
        ('/' + bottomText) +
        '.png',
    );
  }

  return (
    <>
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
      <button onClick={handleText}>Add my text</button>
    </>
  );
}

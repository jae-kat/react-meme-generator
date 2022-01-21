import styled from '@emotion/styled';

const Fragment = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 10px;
  background-color: lightgray;
  margin: 10px;
`;

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
    <Fragment>
      <label>
        Top text{' '}
        <input
          onChange={(event) => setTopText(event.target.value)}
          onKeyPress={handleText}
          value={topText}
        />
      </label>
      <label>
        Bottom text{' '}
        <input
          onChange={(event) => setBottomText(event.target.value)}
          onKeyPress={handleText}
          value={bottomText}
        />
      </label>
      <button onClick={handleText}>Add my text</button>
    </Fragment>
  );
}

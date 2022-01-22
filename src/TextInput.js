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
  topText,
  setTopText,
  bottomText,
  setBottomText,
}) {
  function handleTopText(event) {
    if (event.key === 'Enter') {
      document.getElementById('bottom-text').focus();
    }
  }

  return (
    <Fragment>
      <label>
        Top text{' '}
        <input
          onChange={(event) => setTopText(event.target.value)}
          onKeyPress={handleTopText}
          value={topText}
        />
      </label>
      <label>
        Bottom text{' '}
        <input
          onChange={(event) => setBottomText(event.target.value)}
          value={bottomText}
          id="bottom-text"
        />
      </label>
    </Fragment>
  );
}

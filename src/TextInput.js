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
  // if you are in the input field for the top text and you hit enter, the focus jumps to the bottom input box
  function handleTopText(event) {
    if (event.key === 'Enter') {
      document.querySelector('.bottom-text').focus();
    }
  }

  return (
    // input fields for top and bottom texts. whenever the user types, the values are updated
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
          className="bottom-text"
        />
      </label>
    </Fragment>
  );
}

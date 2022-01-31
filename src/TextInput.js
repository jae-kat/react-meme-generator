import styled from '@emotion/styled';
import { useRef } from 'react';

const Fragment = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 10px;
  background-color: #84b1d8;
  border: 4px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px;
  margin: 30px;
  width: 30vw;
`;

export default function TextInput({
  topText,
  setTopText,
  bottomText,
  setBottomText,
}) {
  const focusJumpToBottom = useRef();

  // if you are in the input field for the top text and you hit enter, the focus jumps to the bottom input field
  function handleFocusJump(event) {
    if (event.key === 'Enter') {
      focusJumpToBottom.current.focus();
    }
  }

  return (
    // input fields for top and bottom texts. whenever the user types, the values are updated
    <Fragment>
      <label>
        Top text{' '}
        <input
          onChange={(event) => setTopText(event.target.value)}
          onKeyPress={handleFocusJump}
          value={topText}
        />
      </label>
      <label>
        Bottom text{' '}
        <input
          onChange={(event) => setBottomText(event.target.value)}
          value={bottomText}
          ref={focusJumpToBottom}
        />
      </label>
    </Fragment>
  );
}

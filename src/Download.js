import styled from '@emotion/styled';
import { saveAs } from 'file-saver';

const Button = styled.button`
  padding: 30px;
  margin: 30px;
  font-size: 30px;
  border: 4px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px;
  &:hover {
    background-color: #3327a3;
    color: white;
  }
`;

export default function Download({ customMeme }) {
  // use the file-saver library to download the meme
  function downloadImage() {
    saveAs(customMeme, 'CustomMeme.jpg');
  }
  return (
    <div>
      <Button onClick={downloadImage}>Download</Button>
    </div>
  );
}

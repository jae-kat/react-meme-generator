import { saveAs } from 'file-saver';

export default function Download({ customMeme }) {
  function downloadImage() {
    saveAs(customMeme, 'CustomMeme.jpg');
  }
  return (
    <div>
      <button onClick={downloadImage}>Download</button>
    </div>
  );
}

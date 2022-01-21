import { saveAs } from 'file-saver';

export default function Download({ customMeme }) {
  function downloadImage() {
    saveAs(customMeme, 'CustomMeme.jpg'); // Put your image url here.
  }
  return (
    <div>
      <button onClick={downloadImage}>Download</button>
    </div>
  );
}

import { saveAs } from 'file-saver';

export default function Download({ customMeme, memeImage }) {
  function downloadImage() {
    saveAs(customMeme ? customMeme : memeImage, 'CustomMeme.jpg');
  }
  return (
    <div>
      <button onClick={downloadImage}>Download</button>
    </div>
  );
}

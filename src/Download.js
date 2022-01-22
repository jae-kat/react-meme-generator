import { saveAs } from 'file-saver';

export default function Download({ customMeme }) {
  // use the file-saver library to download the meme
  function downloadImage() {
    saveAs(customMeme, 'CustomMeme.jpg');
  }
  return (
    <div>
      <button onClick={downloadImage}>Download</button>
    </div>
  );
}

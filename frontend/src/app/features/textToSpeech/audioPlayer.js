import textToSpeech from "./textToSpeech";

const convertBlobToBase64 = async (blob) => { // blob data
  return await blobToBase64(blob);
}

const blobToBase64 = blob => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

const audioPlayer = async (data, setAudioURL, setAudioData) => {
  // Call the textToSpeech function to generate the audio data for the text "Hello welcome"
  const audioData = await textToSpeech(data)
  // Create a new Blob object from the audio data with MIME type 'audio/mpeg'
  const blob = new Blob([audioData], { type: 'audio/mpeg' });
  // Create a URL for the blob object
  const url = await URL.createObjectURL(blob);

  const audio = await convertBlobToBase64(blob);

  setAudioData(audio);

  setAudioURL(url);

  return audio;
};

export default audioPlayer;

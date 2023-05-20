import textToSpeech from "./textToSpeech";

const audioPlayer = async (data, setAudioURL) => {
  // Call the textToSpeech function to generate the audio data for the text "Hello welcome"
  const audioData = await textToSpeech(data)
  // Create a new Blob object from the audio data with MIME type 'audio/mpeg'
  const blob = new Blob([audioData], { type: 'audio/mpeg' });
  // Create a URL for the blob object
  const url = URL.createObjectURL(blob);

  setAudioURL(url);
};

export default audioPlayer;

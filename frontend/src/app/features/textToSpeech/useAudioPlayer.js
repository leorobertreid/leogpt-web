import { useState, useEffect, useRef } from 'react';
import textToSpeech from "./textToSpeech";
import { Howl } from "howler";

const useAudioPlayer = async (data) => {
  // Call the textToSpeech function to generate the audio data for the text "Hello welcome"
  const audioData = await textToSpeech(data)
  // Create a new Blob object from the audio data with MIME type 'audio/mpeg'
  const blob = new Blob([audioData], { type: 'audio/mpeg' });
  // Create a URL for the blob object
  const url = URL.createObjectURL(blob);

  const sound = new Howl({
    src: [url],
    html5: true,
    format: "audio/mpeg"
  })
  sound.play();
};

export default useAudioPlayer;

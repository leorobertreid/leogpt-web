import React from 'react'

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';

import { useSendTranscript } from "../api/useSendTranscript";

/*
const appId = process.env.REACT_APP_SPEECHLY_KEY;
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
*/

const RecognizeSpeech = (props) => {
  const {setIsRecording} = props;

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const useHandleStartListening = () => {
    startListening();
    setIsRecording(true);
  }

  const useHandleStopListening = () => {
    SpeechRecognition.stopListening();
    setIsRecording(false);

    useSendTranscript(transcript);
    resetTranscript();
  }

  return (
    <div>
      {
        listening
        ?
        <button onClick={useHandleStopListening}>Stop listening</button>
        :
        <button onClick={useHandleStartListening}>Start listening</button>
      }
      
      <p>{transcript}</p>
    </div>
  );
}

export default RecognizeSpeech
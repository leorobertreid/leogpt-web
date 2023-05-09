import React, {useContext, useEffect} from 'react'

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';

import { useSendTranscript } from "../api/useSendTranscript";

import { ChatContext } from "../contexts/ChatContext";
import { UserContext } from "../contexts/UserContext";

/*
const appId = process.env.REACT_APP_SPEECHLY_KEY;
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
*/

const RecognizeSpeech = (props) => {
  const {setIsRecording} = props;

  const {chatHistory, setChatHistory} = useContext(ChatContext);

  const {userName, setUserName} = useContext(UserContext);

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

    useSendTranscript(transcript, setChatHistory, userName);
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
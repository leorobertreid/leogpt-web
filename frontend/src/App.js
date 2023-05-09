import React, { useEffect, useState } from 'react'

import RecognizeSpeech from "./audio/RecognizeSpeech";

import ChatHistory from "./ChatHistory";

import {ChatContext} from './contexts/ChatContext'

const App = () => {

  const [isRecording, setIsRecording] = useState(false);

  const [chatHistory, setChatHistory] = useState([]);

  return (
    <>
    <ChatContext.Provider
      value={{chatHistory, setChatHistory}}
    >
      <h1>Leo GPT</h1>
        <RecognizeSpeech setIsRecording={setIsRecording}></RecognizeSpeech>
        <ChatHistory></ChatHistory>
    </ChatContext.Provider>

    </>
  )
}

export default App
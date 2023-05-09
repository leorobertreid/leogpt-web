import React, { useEffect, useState } from 'react'

import RecognizeSpeech from "./audio/RecognizeSpeech";

import ChatHistory from "./ChatHistory";

import {ChatContext} from './contexts/ChatContext'
import { UserContext } from "./contexts/UserContext";
import LoginScreen from "./LoginScreen";

const App = () => {

  const [isRecording, setIsRecording] = useState(false);

  const [chatHistory, setChatHistory] = useState([]);

  const [userName, setUserName] = useState(null);

  return (
    <>
      <UserContext.Provider
        value ={{userName, setUserName}}
      >
        <ChatContext.Provider
          value={{chatHistory, setChatHistory}}
        >
          {
          userName !== null
          ?
          <>
            <h1>Leo GPT</h1>
            <RecognizeSpeech setIsRecording={setIsRecording}></RecognizeSpeech>
            <ChatHistory></ChatHistory>
          </>
          :
          <LoginScreen></LoginScreen>
          }
        </ChatContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
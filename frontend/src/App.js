import React, { useEffect, useState } from 'react'

import RecognizeSpeech from "./audio/RecognizeSpeech";

import ChatHistory from "./ChatHistory";

const App = () => {

  const [isRecording, setIsRecording] = useState(false);

  return (
    <>
    <h1>Leo GPT</h1>
      <RecognizeSpeech setIsRecording={setIsRecording}></RecognizeSpeech>
      <ChatHistory></ChatHistory>
    </>
  )
}

export default App
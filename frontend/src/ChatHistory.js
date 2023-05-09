import React, { useEffect, useState } from 'react'

import getData from "./api/getData"

import { v4 as uuidv4 } from 'uuid';

const ChatHistory = () => {

  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => {
        for (let i of res.data) {
          setChatHistory([...chatHistory, i]);
          console.log(chatHistory);
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <>
      {
        chatHistory.map((chatElement) => (
        <div key={uuidv4()}>
          <h1>{chatElement[0]}</h1><p>Role: {chatElement[1]}</p>
        </div>
        ))
      }
    </>
  )
}

export default ChatHistory
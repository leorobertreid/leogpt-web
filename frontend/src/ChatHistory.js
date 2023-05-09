import React, { useContext, useEffect, useState } from 'react'

import getData from "./api/getData"

import { v4 as uuidv4 } from 'uuid';

import { ChatContext } from "./contexts/ChatContext";

const ChatHistory = () => {

  const {chatHistory, setChatHistory} = useContext(ChatContext);

  useEffect(() => {
    getData()
      .then((res) => {
        setChatHistory(res.data);
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
          <h3>{chatElement[0]}</h3><p>Role: {chatElement[1]}</p>
        </div>
        ))
      }
    </>
  )
}

export default ChatHistory
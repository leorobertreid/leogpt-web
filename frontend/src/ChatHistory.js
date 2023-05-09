import React, { useContext, useEffect, useState } from 'react'

import getData from "./api/getData"

import { v4 as uuidv4 } from 'uuid';

import { ChatContext } from "./contexts/ChatContext";
import { UserContext } from "./contexts/UserContext";

const ChatHistory = () => {

  const {chatHistory, setChatHistory} = useContext(ChatContext);
  const {userName, setUserName} = useContext(UserContext);

  useEffect(() => {
    getData(userName)
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
        chatHistory !== null
        ?
        chatHistory.map((chatElement) => (
        <div key={uuidv4()}>
          <p><b>{chatElement[0]}</b></p><p>Role: {chatElement[1]}</p>
        </div>
        ))
        :
        <div>
        </div>
      }
    </>
  )
}

export default ChatHistory
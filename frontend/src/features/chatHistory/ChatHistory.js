import React from 'react'

import { useSelector, useDispatch } from "react-redux"

import { useGetMessageByUserNameQuery } from "@/redux/services/messagesApi"

import uuid from 'react-uuid';

function ChatHistory() {
  const name = useSelector((state) => state.user.name);

  const { isLoading, isFetching, data, error } = useGetMessageByUserNameQuery(name);

  const chatData = useSelector((state) => state.chat.chatContent);

  if (error) {
    console.log(error);
  }

  return (
    <>
      {error ? (
        <p>No chat history found for user {name}. Once you start adding messages, they will appear here</p>
        ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        data.map((item) => (
          <div key={uuid()}>
            <p>{item[0]}</p>
            <p>{item[1]}</p>
          </div>
        ))
      ): null}
    </>
  )
}

export default ChatHistory
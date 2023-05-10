import React from 'react'

import { useSelector } from "react-redux"

import { useGetMessageByUserNameQuery } from "@/redux/services/messagesApi"

function ChatHistory() {
  const name = useSelector((state) => state.user.name);

  const { isLoading, isFetching, data, error } = useGetMessageByUserNameQuery(name);

  if (error) {
    console.log(error);
  }

  if (data) {
    for (let item of data) {
      console.log(item)
    }
  }

  return (
    <>
      {error ? (
        <p>No chat history found for user {name}. Once you start adding messages, they will appear here</p>
        ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        data.map((item) => (
          <div>
            <p>{item[0]}</p>
            <p>{item[1]}</p>
          </div>
        ))
      ): null}
    </>
  )
}

export default ChatHistory
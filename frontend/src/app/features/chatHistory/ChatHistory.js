import React, {useRef, useEffect} from 'react'

import { useSelector, useDispatch } from "react-redux"

import { useGetMessageByUserNameQuery } from "@/redux/services/messagesApi"

import uuid from 'react-uuid';

function ChatHistory() {
  const username = useSelector((state) => state.user.username);

  const authToken = useSelector((state) => state.user.authToken);

  const { isLoading, isFetching, data, error } = useGetMessageByUserNameQuery({username, token: authToken});

  if (error) {
    console.log(error);
  }

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [data]);

  return (
    <div className="py-10 w-1/2 m-auto">
      {error ? (
        <p>No chat history found for user {name}. Once you start adding messages, they will appear here</p>
        ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
         data.map((item) => (
          item[1] == "user"
          ?
          <div key={uuid()} className="bg-white shadow-lg text-black p-2 rounded-md m-3">
            <p>{item[0]}</p>
          </div>
          :
          <div key={uuid()} className="bg-zinc-800 shadow-lg text-white p-2 rounded-md m-3">
            <p>{item[0]}</p>
          </div>
        ))
      ): null}
      <div ref={messagesEndRef}></div>
    </div>
  )
}

export default ChatHistory
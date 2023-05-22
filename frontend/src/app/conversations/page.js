"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"

import { useSelector, useDispatch } from "react-redux"

import { useGetConversationsQuery, useCreateConversationMutation } from "@/redux/services/conversationsApi"
import { setConversation } from "@/redux/features/conversation/conversationSlice"

import uuid from "react-uuid"

function Conversation() {
  const username = useSelector((state) => state.user.username);
  const authToken = useSelector((state) => state.user.authToken);

  const dispatch = useDispatch();

  const {push} = useRouter();

  useEffect(() => {
    if (!authToken) {
      push('/login');
    }
  }, [])

  const { isLoading, isFetching, data, error } = useGetConversationsQuery({username, token: authToken});

  const [createConversation] = useCreateConversationMutation();

  const handleConversationLink = (name) => {
    dispatch(setConversation({conversation: name}))
    push("/")
  }

  const [conversationName, setConversationName] = useState("");
  const [isConversationNameRequired, setIsConversationNameRequired] = useState(false);

  const handleInputChange = (event) => {
    setConversationName(event.target.value);
  }

  const handleCreateConversation = (event) => {
    event.preventDefault();

    if (conversationName !== "") {
      setIsConversationNameRequired(false);
    }

    if (conversationName === "") {
      setIsConversationNameRequired(true);
      return;
    }

    createConversation({username, token: authToken, name: conversationName});

    setConversationName("");
  }

  return (
    <div className="flex items-center justify-center flex-1">
      <div className="px-8 py-6 text-center w-full lg:w-3/4">
        <div>
          {error ? (
            <></>
            ) : isLoading || isFetching ? (
            <p>Loading...</p>
          ) : data ? (
            data.conversations.map((item) => (
              <div key={uuid()}>
                <button onClick={() => handleConversationLink(item.name)} className="px-6 py-3 mt-4 btn w-full">
                  {item.name}
                </button>
              </div>
            ))
          ): null}
        </div>
        <div className="my-2">
          <form onSubmit={handleCreateConversation} className="w-full mt-4 flex flex-col lg:flex-row justify-between items-center">
            <input type="text" onChange={handleInputChange} value={conversationName} className="w-full rounded-lg lg:mr-5 mb-2 lg:mb-0 py-2 input input-bordered" placeholder="Conversation name"></input>
            <button type="submit" className="py-2 px-3 rounded-lg w-full lg:w-60 btn btn-primary">Add conversation</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Conversation
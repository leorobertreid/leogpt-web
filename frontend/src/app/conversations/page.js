"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"

import { useSelector, useDispatch } from "react-redux"

import { useGetConversationsQuery, useCreateConversationMutation } from "@/redux/services/conversationsApi"
import { setConversation } from "@/redux/features/conversation/conversationSlice"

import uuid from "react-uuid"

function page() {
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

  const handleCreateConversation = async (event) => {
    event.preventDefault();

    await createConversation({username, token: authToken, name: conversationName});
  }

  return (
    <div className="py-10 w-1/2 m-auto">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg text-center">
        <div>
          {error ? (
            <p>Error finding conversations. Please try again later.</p>
            ) : isLoading || isFetching ? (
            <p>Loading...</p>
          ) : data ? (
            data.conversations.map((item) => (
              <div key={uuid()}>
                <button onClick={() => handleConversationLink(item.name)} className="transition hover:duration-300 px-6 py-2 mt-4 text-white shadow-lg bg-zinc-800 rounded-lg hover:bg-white hover:text-zinc-800 w-full">
                  {item.name}
                </button>
              </div>
            ))
          ): null}
        </div>
        <div className="my-2">
          <form onSubmit={handleCreateConversation} className="bg-white w-full p-2 flex justify-between items-center">
            <label>
              Name:
            </label>
            <input type="text" onChange={handleInputChange} className="w-3/4 rounded-lg py-2 px-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-zinc-800 shadow-lg"></input>
            <button type="submit" className="transition hover:duration-300 bg-zinc-800 hover:bg-white hover:text-zinc-800 shadow-lg text-white font-bold py-2 px-3 rounded-lg ml-4 text-sm">Add conversation</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page
"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"

import { useSelector, useDispatch } from "react-redux"

import { useGetConversationsQuery, useCreateConversationMutation } from "@/redux/services/conversationsApi"
import { setConversation } from "@/redux/features/conversation/conversationSlice"

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

  useEffect(() => {
    if (data)
      console.log(data)
  })

  const handleConversationLink = (name) => {
    dispatch(setConversation({conversation: name}))
    push("/")
  }

  const [conversationName, setConversationName] = useState("");

  const handleCreateConversation = (event) => {
    event.preventDefault();
  }

  return (
    <div className="py-10 w-1/2 m-auto">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg text-center">
        {error ? (
          <p>Error finding conversations. Please try again later.</p>
          ) : isLoading || isFetching ? (
          <p>Loading...</p>
        ) : data ? (
          data.conversations.map((item) => (
            <div>
              <button onClick={() => handleConversationLink(item.name)} className="transition hover:duration-300 px-6 py-2 mt-4 text-white shadow-lg bg-zinc-800 rounded-lg hover:bg-white hover:text-zinc-800 w-full">
                {item.name}
              </button>
            </div>
          ))
        ): null}
        {/* TODO: Add conversation creation functionnality */}
      </div>
    </div>
  )
}

export default page
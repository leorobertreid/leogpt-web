"use client"

import React, { useEffect } from 'react'
import { useRouter } from "next/navigation"

import { useSelector } from "react-redux"

import { useGetConversationsQuery, useCreateConversationMutation } from "@/redux/services/conversationsApi"

function page() {
  const username = useSelector((state) => state.user.username);
  const authToken = useSelector((state) => state.user.authToken);

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

  return (
    <>
    <div className="py-10 w-1/2 m-auto">
      {error ? (
        <p>Error finding conversations. Please try again later.</p>
        ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        data.conversations.map((item) => (
          <div>
            {item.name}
          </div>
        ))
      ): null}
    </div>
    </>
  )
}

export default page
"use client";

import { useGetMessageByUserNameQuery } from "@/redux/services/messagesApi";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useRouter } from 'next/navigation';

import ChatHistory from "@/features/chatHistory/ChatHistory";

export default function Home() {
  const name = useSelector((state) => state.user.name);

  const { push } = useRouter();

  useEffect(() => {
    console.log(name)

    if (name === "" || !name) {
      push('/login');
    }
  }, [])

  return (
    <>
      <div>
        Chat history: 
        <ChatHistory></ChatHistory>
        <PostMessage></PostMessage>
      </div>
    </>
  )
}
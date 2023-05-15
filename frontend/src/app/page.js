"use client";

import { useGetMessageByUserNameQuery } from "@/redux/services/messagesApi";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useRouter } from 'next/navigation';

import ChatHistory from "./features/chatHistory/ChatHistory";
import PostMessage from "./features/postMessage/PostMessage";
// import SpeechRecognitionComponent from "@/app/features/speechRecognition/SpeechRecognitionComponent";

export default function Home() {
  const username = useSelector((state) => state.user.username);
  const conversation = useSelector((state) => state.conversation.conversation);

  const { push } = useRouter();

  useEffect(() => {
    if (username === "" || !username) {
      push('/login');
    } else if (conversation === "" || !conversation) {
      push('/conversations');
    }
  }, [])

  return (
    <>
      <div>
        <ChatHistory></ChatHistory>
        {/* spacing to allow for enough spacing for the post message to not hide the last message */}
        <div className="h-5"></div>
        <PostMessage></PostMessage>
        {/*<SpeechRecognitionComponent></SpeechRecognitionComponent>*/}
      </div>
    </>
  )
}
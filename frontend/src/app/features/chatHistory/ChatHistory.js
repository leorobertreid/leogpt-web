import React, {useRef, useEffect, useState} from 'react'

import { useSelector, useDispatch } from "react-redux"

import { useGetMessagesQuery } from "@/redux/services/messagesApi"

import audioPlayer from "../textToSpeech/audioPlayer";
import useAudio from "../textToSpeech/useAudio";

import uuid from 'react-uuid';
import { async } from "regenerator-runtime";

function ChatHistory() {
  const username = useSelector((state) => state.user.username);
  const authToken = useSelector((state) => state.user.authToken);
  const conversation = useSelector((state) => state.conversation.conversation);

  // we use this to not do text to speech when you just loaded the page
  const [justLoaded, setJustLoaded] = useState(true);

  const [audioURL, setAudioURL] = useState(null);

  const { isLoading, isFetching, data, error } = useGetMessagesQuery({username, conversation, token: authToken});

  if (error) {
    console.log(error);
  }

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleAudio = async () => {
    if (justLoaded) {
      setJustLoaded(false);
    } else {
      if (data) {
        try {
          if (data[data.length - 1][1] === "assistant") {
            await audioPlayer(data[data.length - 1][0], setAudioURL);
          }
        } catch {}
      }
    }
  }

  useEffect(() => {
    scrollToBottom()

    console.log(justLoaded)
    handleAudio();

  }, [data]);

  return (
    <>
    <div>
      <div className="py-10 w-1/2 m-auto">
        {error ? (
          <p>No messages found in this conversation. Once you start adding messages, they will appear here</p>
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
        <audio src={audioURL} controls className="w-full"></audio>
      </div>
    </div>

    </>
  )
}

export default ChatHistory
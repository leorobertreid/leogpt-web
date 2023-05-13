import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { useCreateMessageMutation } from "@/redux/services/messagesApi"

function PostMessage() {
  const [text, setText] = useState("");
  const name = useSelector((state) => state.user.name);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [createMessage] = useCreateMessageMutation();

  function handleSubmit(event) {
    event.preventDefault();
    setFormSubmitted(true);
    createMessage({name, text});
    setText("");
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="fixed bottom-0 bg-white w-full p-2 flex justify-between items-center">
      <input 
        type="text" 
        placeholder="Type your message here" 
        onChange={(event) => setText(event.target.value)} 
        value={text} 
        className="w-full rounded-lg py-2 px-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-zinc-800 shadow-lg" 
      />
      <button 
        type="submit" 
        className="bg-zinc-800 hover:bg-white hover:text-zinc-800 shadow-lg text-white font-bold py-2 px-3 rounded-lg ml-4 text-sm"
      >
        submit
      </button>
    </form>
    </>
  )
}

export default PostMessage
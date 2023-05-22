import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { useCreateMessageMutation } from "@/redux/services/messagesApi"

function PostMessage() {
  const [text, setText] = useState("");

  const username = useSelector((state) => state.user.username);
  const authToken = useSelector((state) => state.user.authToken);
  const conversation = useSelector((state) => state.conversation.conversation);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [createMessage] = useCreateMessageMutation();

  function handleSubmit(event) {
    event.preventDefault();
    setFormSubmitted(true);
    createMessage({username, text, conversation, token: authToken});
    setText("");
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="fixed bottom-0 w-full mt-4 p-2 flex flex-col lg:flex-row justify-between items-center">
      <input 
        type="text" 
        placeholder="Type your message here" 
        onChange={(event) => setText(event.target.value)} 
        value={text} 
        className="w-full rounded-lg lg:mr-5 mb-2 lg:mb-0 py-2 input input-bordered" 
      />
      <button 
        type="submit" 
        className="py-2 px-3 rounded-lg w-full lg:w-60 btn btn-primary"
      >
        submit
      </button>
    </form>
    </>
  )
}

export default PostMessage
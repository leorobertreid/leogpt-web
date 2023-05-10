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
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <input type="text" onChange={(event) => setText(event.target.value)} value={text}></input>
          <button type="submit">Add message</button>
        </label>
      </form>
    </>
  )
}

export default PostMessage
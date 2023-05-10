"use client";

import { useSelector, useDispatch } from 'react-redux'
import { setName } from '../../redux/features/user/userSlice'
import { useEffect, useState } from "react";

import { useRouter } from 'next/navigation';

export default function Login() {
  const name = useSelector((state) => state.user.name)
  
  const dispatch = useDispatch()

  const [input, SetInput] = useState("");

  const { push } = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(setName(input))
    console.log("set name")
    push('/');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username: 
          <input type="text" onChange={(event) => {SetInput(event.target.value)}}></input>
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  )
}
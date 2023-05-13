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

  const [isUserNameRequired, setIsUserNameRequired] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (input == "") {
      setIsUserNameRequired(true);
      return;
    }
    dispatch(setName(input))
    console.log("set name")
    push('/');
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
          <label>
            Username: 
          </label>
          <input type="text" placeholder="Username" onChange={(event) => {SetInput(event.target.value)}} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black shadow-lg"></input>
          {
            isUserNameRequired
            &&
            <span className="text-xs tracking-wide text-red-600">Username field is required </span>
          }
          
          <br></br>
          <button type="submit" className="px-6 py-2 mt-4 text-white shadow-lg bg-zinc-800 rounded-lg hover:bg-white hover:text-zinc-800">submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
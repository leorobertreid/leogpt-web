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
    <div className="flex items-center justify-center min-h-screen">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
          <label>
            Username: 
          </label>
          <input type="text" placeholder="Username" onChange={(event) => {SetInput(event.target.value)}} class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"></input>
          {
            isUserNameRequired
            &&
            <span class="text-xs tracking-wide text-red-600">Username field is required </span>
          }
          
          <br></br>
          <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
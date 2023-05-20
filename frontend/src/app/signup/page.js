"use client";

import { useSelector, useDispatch } from 'react-redux'
import { setUser, setToken } from '../../redux/features/user/userSlice'

import { useEffect, useState } from "react";

import { useRouter } from 'next/navigation';
import InputField from "../features/form/InputField";

import { calculateSizeAdjustValues } from "next/dist/server/font-utils";
import { useSignUpMutation } from "@/redux/services/authApi";

import Link from "next/link";

export default function SignUp() {
  const authToken = useSelector((state) => state.user.authToken)

  const [invalidSignIn, setInvalidSignIn] = useState(false);

  const [signUp] = useSignUpMutation();
  
  const dispatch = useDispatch()

  const [input, setInput] = useState({Username: "", Email: "", Password: ""});

  const { push } = useRouter();

  const [isUserNameRequired, setIsUserNameRequired] = useState(false);
  const [isEmailRequired, setIsEmailRequired] = useState(false);
  const [isPasswordRequired, setIsPasswordRequired] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (input.Username === "") {
      setIsUserNameRequired(true);
      return;
    }
    if (input.Password === "") {
      setIsPasswordRequired(true);
      return;
    }

    try {
      const response = await signUp({username: input.Username, email: input.Email, password: input.Password});

      if (response.data === null) {
        throw new Error("User already exists with that name")
      }

      const token = response.data.token;
  
      dispatch(setToken({authToken: token}));
  
      dispatch(setUser({username: input.Username, authToken}))
  
      push('/');
    } catch(e) {
      console.log("User already exists with that name");
      setInvalidSignIn(true);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen flex-1">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Sign up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
          <InputField name="Username" input={input} setInput={setInput} isRequired={isUserNameRequired}></InputField>
          <br></br>
          <InputField name="Email" input={input} setInput={setInput} isRequired={isEmailRequired}></InputField>
          <br></br>
          <InputField name="Password" input={input} setInput={setInput} isRequired={isPasswordRequired}></InputField>
          <br></br>
          <button type="submit" className="px-6 py-2 mt-4 text-white shadow-lg bg-zinc-800 rounded-lg hover:bg-white hover:text-zinc-800">submit</button>
          <br></br>
          <Link href="/login" className="underline">Already have an account? Log in!</Link>
          </div>
          {
            invalidSignIn
            &&
            <span className="transition hover:duration-300 text-xs tracking-wide text-red-600">User already exists with that name</span>
          }
        </form>
      </div>
    </div>
  )
}
"use client";

import { useSelector, useDispatch } from 'react-redux'
import { setUser, setToken } from '../../redux/features/user/userSlice'

import { useState } from "react";

import { useRouter } from 'next/navigation';
import InputField from "../features/form/InputField";

import { useLogInMutation } from "@/redux/services/authApi";
import Link from "next/link";

export default function Login() {
  const authToken = useSelector((state) => state.user.authToken)

  const [invalidSignIn, setInvalidSignIn] = useState(false);

  const [logIn] = useLogInMutation();
  
  const dispatch = useDispatch()

  const [input, setInput] = useState({Username: "", Password: ""});

  const { push } = useRouter();

  const [isUserNameRequired, setIsUserNameRequired] = useState(false);
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
      const {data} = await logIn({username: input.Username, password: input.Password});

      if (data === null) {
        throw new Error("Username or Password is invalid")
      }

      const token = data.token;
  
      dispatch(setToken({authToken: token}));
  
      dispatch(setUser({username: input.Username, authToken}))
  
      push('/');
    } catch(e) {
      console.log("Username or Password is invalid");
      setInvalidSignIn(true);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen flex-1">
      <div className="px-8 py-6 mt-4 text-left shadow-lg w-full md:w-1/2">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <InputField name="Username" input={input} setInput={setInput} isRequired={isUserNameRequired}></InputField>
            <InputField name="Password" input={input} setInput={setInput} isRequired={isPasswordRequired}></InputField>
            <button type="submit" className="mb-4 mt-2 btn btn-primary w-full">submit</button>
            <br></br>
            <Link href="/signup" className="underline">Don&apos;t have an account? Sign up!</Link>
          </div>
          {
            invalidSignIn
            &&
            <span className="text-xs tracking-wide text-red-600">Invalid username or password</span>
          }
        </form>
      </div>
    </div>
  )
}
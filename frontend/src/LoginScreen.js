import React, {useContext, useState} from 'react'

import { UserContext } from "./contexts/UserContext"

const LoginScreen = () => {
  const {userName, setUserName} = useContext(UserContext);

  const [inputVal, setInputValue] = useState("");

  const  handleChange = (event) => {
		setInputValue(event.target.value);
	};

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserName(inputVal);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username: 
          <input type="text" value={inputVal} onChange={handleChange}></input>
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default LoginScreen
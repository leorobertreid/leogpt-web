import React, { useEffect, useState } from 'react'

function InputField(props) {
  const {name, isRequired, input, setInput} = props;
    
  return (
    <>
      <label>
        {name}: 
      </label>
      <input type="text" placeholder={name} onChange={(event) => {setInput({...input, [name]: event.target.value})}} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black shadow-lg"></input>
      {
        isRequired
        &&
        <span className="text-xs tracking-wide text-red-600">{name} field is required </span>
      }
    </>
  )
}

export default InputField
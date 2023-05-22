function InputField(props) {
  const {name, isRequired, input, setInput} = props;
    
  return (
    <div className="my-4">
      <input type="text" placeholder={name} onChange={(event) => {setInput({...input, [name]: event.target.value})}} className="w-full px-4 py-2 my-1 input input-bordered"></input>
      <br></br>
      {
        isRequired
        &&
        <span className="text-xs tracking-wide text-red-600">{name} field is required </span>
      }
    </div>
  )
}

export default InputField
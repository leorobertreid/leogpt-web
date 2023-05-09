import axios from "axios"

const getData = async () => {
  const res = await axios.get("http://localhost:5000/rest/getAllMessages/leo");
  console.log(res)
  return res
}

export default getData
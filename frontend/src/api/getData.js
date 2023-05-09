import axios from "axios"

const getData = async (userName) => {
  console.log("get data username: " + userName)
  const res = await axios.get(`http://localhost:5000/rest/getAllMessages/${userName}`);
  console.log(res)
  return res
}

export default getData
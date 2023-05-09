import axios from "axios"

const useGetData = async () => {
  const res = await axios.get("http://localhost:5000/rest/getAllMessages/leo");
  return res
}

export default useGetData
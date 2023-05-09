import axios from "axios"
import getData from "./getData";

export const useSendTranscript = async (transcript, setChatHistory) => {
  console.log("sending transcript")
  const response = axios.post('http://localhost:5000/rest/create-text', {
    user: "leo",
    message: transcript
  })
  .then((response) => {
    getData()
    .then((res) => {
      setChatHistory(res.data)
    })
  }, (error) => {
    console.log(error);
  });
}
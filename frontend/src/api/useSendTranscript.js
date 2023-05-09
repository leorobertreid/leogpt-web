import axios from "axios"
import getData from "./getData";

export const useSendTranscript = async (transcript, setChatHistory, userName) => {

  console.log(userName);

  console.log("sending transcript")
  const response = axios.post('http://localhost:5000/rest/create-text', {
    user: userName,
    message: transcript
  })
  .then((response) => {
    getData(userName)
    .then((res) => {
      setChatHistory(res.data)
    })
  }, (error) => {
    console.log(error);
  });
}
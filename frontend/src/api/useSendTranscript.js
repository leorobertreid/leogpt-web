import axios from "axios"

export const useSendTranscript = (transcript) => {
  console.log("sending transcript")
  const response = axios.post('http://localhost:5000/rest/create-text', {
    user: "leo",
    message: transcript
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}
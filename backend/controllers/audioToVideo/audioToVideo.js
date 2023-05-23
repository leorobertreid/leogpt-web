const Replicate = require("replicate")
require("dotenv").config();

const fs = require("fs");

async function audioToVideo(inputAudio) {

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const inputImage = `data:image/png;base64,${fs.readFileSync("controllers/audioToVideo/leo.png", "base64")}`;
  
  const output = await replicate.run(
    "cjwbw/sadtalker:3aa3dac9353cc4d6bd62a8f95957bd844003b401ca4e4a9b33baa574c549d376",
    {
      input: {
        source_image: inputImage,
        driven_audio: inputAudio,
      },
      enhancer: "",
    }
  );

  return output
}

module.exports = audioToVideo
require("dotenv").config()

const { Configuration, OpenAIApi } = require ("openai");

const getAllMessages = require("../../message/getAllMessages")

const getSystemMessage = require("../../systemMessage/getSystemMessage")

const getGPTResponse = async (username, conversationName) => {
  const apiKey = process.env.OPENAI_API_KEY
  const org = process.env.OPENAI_ORG

  const configuration = new Configuration({
    organization: org,
    apiKey: apiKey,
  });

  const openai = new OpenAIApi(configuration);

  let messages = null

  for (let i = 0; i < 5; i++) {
    messages = await getAllMessages(username, conversationName);

    if (messages !== null) {
      break
    }
  }

  if (messages === null) {
    throw new Error("Get all messages returned null")
  }

  const SystemMessage = await getSystemMessage("main-message")

  if (SystemMessage === null) {
    throw new Error("System message doesn't exist")
  }
    
  // reformat messages to be compatible
  const formattedMessages = [];

  // feed ai with system message
  formattedMessages.push({role: "system", content: SystemMessage.message})

  for (let i of messages) {
    formattedMessages.push({role: i[1], content: i[0]})
  }

  try {
    const GPTResponse = await openai.createChatCompletion({model: "gpt-3.5-turbo", messages: formattedMessages,})
    const GPTResponseFormatted = GPTResponse.data.choices[0].message.content

    return GPTResponseFormatted    
  } catch(e) {
    console.log(e)
  }
}

module.exports = getGPTResponse
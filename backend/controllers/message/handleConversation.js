const createMessage = require("./createMessage")
const getGPTResponse = require("../ai/gpt/getGPTResponse")

const handleConversation = async (message, user, conversation) => {
  try {
    await createMessage(message, user, conversation, "user")
    const GPTResponse = await getGPTResponse(user, conversation, message)
    await createMessage(GPTResponse, user, conversation, "assistant")
  } catch (e) {
    console.log(e)
  }
}

module.exports = handleConversation
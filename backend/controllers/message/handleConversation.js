const createMessage = require("./createMessage")
const getGPTResponse = require("./getGPTResponse")

const handleConversation = async (message, user) => {
  try {
    await createMessage(message, user, "user")

    const GPTResponse = await getGPTResponse(user, message)

    await createMessage(GPTResponse, user, "assistant")
  } catch (e) {
    console.log(e)
  }

}

module.exports = handleConversation
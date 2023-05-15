const getConversation = require("../conversation/getConversation")

const getAllMessages = async (username, conversationName) => {
  const conversation = await getConversation(username, conversationName)

  return conversation.messages
}

module.exports = getAllMessages
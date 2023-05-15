const getConversation = require("../conversation/getConversation")

const createMessage = async (message, username, conversationName, messageType) => {
  const conversation = await getConversation(username, conversationName);
  
  conversation.messages.push([message, messageType])
  await conversation.save()
  
}

module.exports = createMessage
const Conversation = require("../../models/Conversation")
const User = require("../../models/User")

async function getConversation(username, conversationName) {
  const conversations = await User.findOne({"username": username}).populate("conversations")

  if (!(conversations)) {
    throw new Error("User doesn't exist with name sent")
  }

  let conversationId = null
  conversations.conversations.forEach((item) => {
    if (item.name === conversationName) {
      conversationId = item._id

      return
    }
  })

  if (!(conversationId)) {
    throw new Error("Conversation with name sent doesn't exist")
  }

  const conversation = await Conversation.findById(conversationId);

  return conversation
}

module.exports = getConversation
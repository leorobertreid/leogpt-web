const User = require("../../models/User")
const Conversation = require("../../models/Conversation")

async function getConversations(username) {
  const conversations = await User.findOne({"username": username}).populate("conversations").select("conversations")

  if (conversations !== null) {
    return conversations.conversations
  } else {
    throw new Error("unable to get conversations")
  }
}

module.exports = getConversations
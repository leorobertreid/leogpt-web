const User = require("../../models/User")
const Conversation = require("../../models/Conversation")

async function createConversation(username, name) {
  const userExists = await User.exists({"username": username});

  if (!userExists) {
    return -1
  }

  const userId = await User.findOne({"username": username});

  const conversation = new Conversation({name, userId, messages: []})
  const {_id} = await conversation.save();

  const user = await User.findById(userId);
  user.conversations.push(_id);
  await user.save();
}

module.exports = createConversation
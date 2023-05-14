const mongoose = require("mongoose")
const User = require("../../models/User")

const getAllMessages = async (username) => {
  const messages = await User.findOne().where("username").equals(username).select("messages")
  if (messages !== null) {
    return messages.messages
  }
  else {
    return null
  }
}

module.exports = getAllMessages
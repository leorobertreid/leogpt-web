const mongoose = require("mongoose");

const User = require("../../models/User")

const createMessage = async (message, username, messageType) => {

  const userExists = await User.exists().where("username").equals(username)

  if (!userExists) {
    return -1
  } else {
    const user = await User.findOne().where("username").equals(username)
    user.messages.push([message, messageType])
    await user.save()
  }
}

module.exports = createMessage
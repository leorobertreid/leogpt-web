const mongoose = require("mongoose");

const User = require("../models/User")

const createMessage = async (message, username, messageType) => {

  const userExists = await User.exists().where("name").equals(username)

  if (!userExists) {
    const user = new User({name: username, messages: [[message, messageType]]})
    await user.save()
  } else {
    const user = await User.findOne().where("name").equals(username)
    user.messages.push([message, messageType])
    await user.save()
  }
}

module.exports = createMessage
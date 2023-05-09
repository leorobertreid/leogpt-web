const SystemMessage = require("../models/SystemMessage")

const createSystemMessage = async (name, data) => {
  const userExists = await SystemMessage.exists().where("name").equals(name)

  if (!userExists) {
    const message = new SystemMessage({name: name, message: data})
    message.save()
  } else {
    console.log("system message with that name already exists")
  }
}

module.exports = createSystemMessage
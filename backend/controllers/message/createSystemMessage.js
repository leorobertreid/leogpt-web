const SystemMessage = require("../../models/SystemMessage")

const createSystemMessage = async (name, data) => {
  const messageExists = await SystemMessage.exists().where("name").equals(name)

  if (!messageExists) {
    const message = new SystemMessage({name: name, message: data})
    message.save()
  } else {
    console.log("system message with that name already exists")
  }
}

module.exports = createSystemMessage
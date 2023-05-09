const mongoose = require("mongoose")
const SystemMessage = require("../models/SystemMessage")

const getSystemMessage = async (sysMessageName) => {
  const message = await SystemMessage.findOne().where("name").equals(sysMessageName)
  return message
}

module.exports = getSystemMessage
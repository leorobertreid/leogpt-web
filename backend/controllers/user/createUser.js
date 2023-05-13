const User = require("../../models/User")

const createUser = (userName) => {
  const user = new User({name: userName, messages: []})
}
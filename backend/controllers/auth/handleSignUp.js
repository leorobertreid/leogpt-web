const User = require("../../models/User")
const mongoose = require("mongoose")

const bcrypt = require("bcryptjs");

async function handleSignUp(username, email, password) {
  const passwordHashed = await bcrypt.hash(password, 10);

  const user = new User({username: username, email: email, password: passwordHashed});
  await user.save();
  return user;
}

module.exports = handleSignUp
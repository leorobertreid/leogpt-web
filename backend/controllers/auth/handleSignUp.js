const User = require("../../models/User")
const mongoose = require("mongoose")

require("dotenv").config();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken")

async function handleSignUp(username, email, password) {
  const passwordHashed = await bcrypt.hash(password, 10);

  const user = new User({username: username, email: email, password: passwordHashed, messages: []});
  await user.save();

  const token = await jwt.sign({ username: user.username }, process.env.SECRET);
  return token;
}

module.exports = handleSignUp
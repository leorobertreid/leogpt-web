const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

require("dotenv").config();

async function handleSignIn(username, password) {
  const SECRET = process.env.SECRET;

  const user = await User.findOne({"username": username});

  const result = await bcrypt.compare(password, user.password);

  if (result) {
    const token = await jwt.sign({ username: user.username }, SECRET);
    return {accepted: true, token};
  } else {
    return {accepted: false};
  }
}

module.exports = handleSignIn
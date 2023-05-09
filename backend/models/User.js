const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  messages: {
    type: [[String, String]],
    required: false,
  } 
});

module.exports = mongoose.model("User", userSchema)
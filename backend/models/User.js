const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  conversations: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: "Conversation"}],
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema)
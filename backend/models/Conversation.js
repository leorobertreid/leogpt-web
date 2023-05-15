const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  messages: {
    type: [[String, String]],
    required: true,
  },
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
});

module.exports = mongoose.model("Conversation", conversationSchema)
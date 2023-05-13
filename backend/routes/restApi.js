const express = require('express');
const router = express.Router();

const handleConversation = require("../controllers/message/handleConversation")
const getAllMessages = require("../controllers/message/getAllMessages")

const createSystemMessage = require("../controllers/message/createSystemMessage")
const getSystemMessage = require("../controllers/message/getSystemMessage")

router.route("/messages")
  .post(async (req, res) => {
    const reqContents = req.body;
    if (reqContents.user && reqContents.message) {
      await handleConversation(reqContents.message, reqContents.user.toLowerCase())
      
      res.send("Success with connection")
    } else {
      res.send("Please send a .user, .message and .messageType property")
    }
  })

router.get("/messages/:username", async (req, res) => {
  const messages = await getAllMessages(req.params.username.toLowerCase())
  res.json(messages)
})

router.route("/system-message")
  .post(async (req, res) => {
    await createSystemMessage(req.body.name.toLowerCase(), req.body.message)
    res.send("created system message")
  })

router.route("/system-message/:name")
  .get(async (req, res) => {
    const sysMessage = await getSystemMessage(req.params.name.toLowerCase())
    res.json(sysMessage)
  })

module.exports = router 
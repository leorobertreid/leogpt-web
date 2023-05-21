const express = require('express');
const router = express.Router();

const handleConversation = require("../controllers/message/handleConversation")
const getAllMessages = require("../controllers/message/getAllMessages")

const createSystemMessage = require("../controllers/systemMessage/createSystemMessage")
const getSystemMessage = require("../controllers/systemMessage/getSystemMessage");

const createConversation = require("../controllers/conversation/createConversation");
const getConversations = require("../controllers/conversation/getConversations");
const audioToVideo = require("../controllers/audioToVideo/audioToVideo");

router.post("/audioToVideo", async (req, res) => {
  try {
    if (req.body.audio) {
      const video = await audioToVideo(req.body.audio);
      res.send({video});
    } else {
      throw new Error("You must have an audio property included.");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("error");
  }
})

router.route("/conversations")
  .post(async (req, res) => {
    if (!req.body.name || !req.body.username) {
      res.status(400).send("Missing name for the conversation or username")
    } else {
      const user = req.user.username;
      console.log(req.body)
      const name = req.body.name;
      console.log(user, name)
      await createConversation(user, name);
      res.send("created conversation")
    }
  })

router.route("/conversations/:username")
  .get(async (req, res) => {
    try {
      const username = req.params.username.toLowerCase()
      const conversations = await getConversations(username)
      res.json({conversations})
    } catch (error) {
      res.status(400).send("unable to find conversations")
    }
  })

router.route("/message")
  .post(async (req, res) => {
    try {
      const reqContents = req.body;
      if (req.username && reqContents.message && reqContents) {
        await handleConversation(reqContents.message, req.username.toLowerCase(), reqContents.conversation)
        
        res.send("Success with connection")
      } else {
        throw new Error("message not formatted properly")
      }
    } catch (error) {
      res.status(400).send("Error posting your message")
    }
  })

router.get("/messages/:username/:conversationName", async (req, res) => {
  try {
    const messages = await getAllMessages(req.params.username.toLowerCase(), req.params.conversationName)
    res.json(messages).send("success")
  } catch (error) {
  }
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
const express = require('express');
const handleSignUp = require("../controllers/auth/handleSignUp");
const router = express.Router();

const User = require("../models/User")
const mongoose = require("mongoose");
const handleSignIn = require("../controllers/auth/handleSignIn");

router.post(
  "/signup",
  async (req, res) => {
    try {
      const userExists = await User.exists({"username": req.body.username})

      if (!userExists) {
        if (req.body.username && req.body.email && req.body.password) {
          const user = await handleSignUp(req.body.username, req.body.email, req.body.password);
          res.json(user);
        } else {
          res.status(400).send("you must give a username, email and password field");
        }
      } else {
        res.status(400).send("User already exists");
      }
    } 
    catch(error) {
      res.status(400).json({error});
    }
  }
);

router.post(
  "/login",
  async (req, res) => {
    // try {
      const userExists = await User.exists({"username": req.body.username})
      if (userExists) {
        if (req.body.username && req.body.password) {
          const result = await handleSignIn(req.body.username, req.body.password);
          if (result.accepted) {
            res.json(result.token);
          } else {
            res.status(400).send("incorrect password");
          }
        } else {
          res.status(400).send("You must send a username and password");
        }
      } else {
        res.status(400).send("the user doesn't exist");
      }
    // } catch(error) {
    //   res.status(400).json({error})
    // }
  }
)

module.exports = router
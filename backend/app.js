const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const restApi = require("./routes/restApi");
const auth = require("./routes/auth")

const checkToken = require("./controllers/auth/checkToken")

require('dotenv').config()

try {
  mongoose.connect(process.env.MONGODB_CONNECTION_URL);
} catch(err) {
  console.log(err);
}

const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  console.log("gotten request");
  console.log(req.body);
  next();
})

app.use("/rest", checkToken, restApi);

app.use("/auth", auth)

app.listen(5000)
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

try {
  mongoose.connect(process.env.MONGODB_CONNECTION_URL);
} catch(err) {
  console.log(err);
}


const restApi = require("./routes/restApi");

const app = express()

app.use(cors())

app.use(express.json())

app.use("/rest", restApi);

app.listen(5000)
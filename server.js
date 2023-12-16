const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

//routes
const authRouter = require("./src/router/authRouter")

const app = express();
const PORT = process.env.PORT || 4001;

//static files
app.use(express.static(path.join(__dirname, "src", "public")))
//middleWare
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(fileupload({useTempFiles: true}))
app.use(cors())



//use routes
app.use('/api/auth', authRouter)

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL, {})
  .then(() => {
    app.listen(PORT, () => console.log(`Server sterted on port : ${PORT} `));
  })
  .catch((error) => console.log(error));

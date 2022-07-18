const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

//CONNECT TO MONGODB
mongoose.connect(process.env.DB_CONNECT, {
  useUnifiedTopology: true,
  useNewUrlParse: true,
},()=>{
    console.log('Connected to DataBase');
});

app.listen(4000, () => {
  console.log(`Listening to port 4000....`);
});

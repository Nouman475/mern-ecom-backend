require('dotenv').config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_CONNECTION_STRING;

const connectToMongo = async () => {
  try {
    await mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  } catch (error) {
   console.log("Error connecting to Mongo DB")
  }
};

module.exports = connectToMongo;
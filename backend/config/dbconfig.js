require("dotenv").config();

const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  console.log("MONGODB_URL is not defined in the environment variables.");
  process.exit(1); // Exit the application if URL is not provided
}
const databaseconnect = () => {
  mongoose
    .connect(MONGODB_URL)
    .then((conn) => console.log(`Connected to DB: ${conn.connection.host}`))
    .catch((err) => {
      console.log("Error in connection", err.message); // Exit on connection error
    });
};

module.exports = databaseconnect;

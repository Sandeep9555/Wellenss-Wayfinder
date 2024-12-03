require("dotenv").config();

const express = require("express");
const databaseConnect = require("./config/dbconfig");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 5001;
const cors = require("cors");
const userRoute = require("./routes/userRoute");
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/users", userRoute);
app.get("/", (req, res) => {
  res.send("Api SuccessFull created!");
});
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    methods: ["GET,POST,PUT,DELETE,HEAD"],
    credentials: true,
  })
);
databaseConnect();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server Started on the port" + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

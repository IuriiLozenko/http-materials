const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();

app.get("/test123", (req, res) => {
  res.status(200).json({ message: "It works" });
});

app.listen(process.env.PORT, () => console.log("app is running"));

const express = require("express");
const { json } = require("express");

const userRoutes = require("./routes/userRoutes");
const tweetRoutes = require("./routes/tweetRouters");

const app = express();

app.use(json());

app.use("/user", userRoutes);
app.use("/tweet", tweetRoutes);

module.exports = app;
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const emailRoutes = require('./routes/emailRoutes');
const itemRoutes = require("./routes/itemRoutes");
const path = require("path");


const app = express();

app.use("/auth", authRoutes);
app.use("/items", itemRoutes);
app.use("/public", express.static(path.join(__dirname, "../public")));
app.use('/emails', emailRoutes);


module.exports = app;

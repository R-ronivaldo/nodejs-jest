const express = require("express");

app = express();
app.use(express.json());

app.use("/", require("./src/controller/controller"));

app.listen(3001);
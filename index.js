const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const Port = process.env.Port || 5000;
const AllCategories = require("./Data/Catagory.json");

app.get("/catagories", (req, res) => {
    res.send(AllCategories);
  });



  app.listen(Port, () => {
    console.log("server is running", Port);
  });


  module.exports = app;
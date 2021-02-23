const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/Article");
const port = process.env.PORT || 8080;
const app = express();
mongoose.connect(
  "mongodb://localhost:27017/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
  },
  (err) => {
    if (err) throw err;
    console.log("Mongoose connection is successful");
  }
);

var newArticle = new Article({
    name:"Book 3 ",
    barcodeNumber:"AAAAAc"
})
const name = newArticle.getName();
console.log("my name ->",name)
newArticle.save();
console.log(`${port} i s  w o r k i n g `);
app.listen(port);

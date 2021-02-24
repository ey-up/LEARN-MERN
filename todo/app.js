const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const mongodb = require("mongodb");
const Todo = require("./models/Todo");

const app = express();
const port = process.env.PORT || 8080;
const url = "mongodb://localhost:27017/todoApp";
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true},(err)=>{
    if(err) throw err;
    console.log("mongoose is successful")
})

app.post("/", (req, res) => {
    console.log("oldi")
    const newTodo = new Todo({
        todo : req.body.todo
    },()=>{console.log("oldi")})
    newTodo.save();
    res.redirect("http://localhost:8080");
    
});

app.get("/", (req, res) => {
    Todo.find(function (err, todos) {
        if (err) return console.error(err);
        console.log(todos);
        res.render("index",{data:todos})
      })
  
    
  });

app.listen(port, () => console.log(`${port} is working`));

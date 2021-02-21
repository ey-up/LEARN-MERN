const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongodb = require("mongodb");
const url = "mongodb://localhost:27017";
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));



app.post("/", (req, res) => {
    mongodb.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
        if(err) throw err;
        var dbo = db.db("todo");
        dbo.collection("list").insertOne({todo:req.body.todo},(err,result)=>{
            if(err) throw err;
            res.redirect("http://localhost:8080");
            
        })
    })
    
});

app.get("/", (req, res) => {
    mongodb.connect(url,{useNewUrlParser:true, useUnifiedTopology:true},(err,db)=>{
        if(err) throw err;
        var dbo = db.db("todo");
        dbo.collection("list").find({}).toArray((err,result)=>{
            if (err) throw err;
            res.render("index",{data: result})
            db.close();
        })
    })
    
  });

app.listen(port, () => console.log(`${port} is working`));

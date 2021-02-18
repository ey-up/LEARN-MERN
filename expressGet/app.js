const express = require('express');
const { parse } = require('path');
const app = express();

const names= [
    {id : 1 , name : "eslem1"},
    {id : 2 , name : "eslem2"},
    {id : 3 , name : "eslem3"}
] 

app.get("/",function(req,res){
    res.send("index");
});

app.get("/count /:id/:key",function (req,res) {
    res.send(req.params);
    console.log(req.params);
    console.log(req.query); 
})

app.get("/names/:id",function (req,res){
    const name = names.find(name => name.id === parseInt(req.params.id))
    if(!name) res.send("The name id you entered was not found");
    else {
        res.send(name);
        console.log(name);
    }
})



const port = process.env.PORT || 8080;

app.listen(port);
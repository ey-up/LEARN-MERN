const express = require('express');
const app = express();
app.use(express.json());


const employees = [
    {id : 1 , name : "ayşe"},
    {id : 2 , name : "fatma"},
    {id : 3 , name : "hayriye"}
]
app.get("/employees/all",function(req,res){
    res.send(employees)
})

app.post("/employees",function (req,res) {
    
    const employee = {
        id: employees.length + 1,
        name: req.body.name
    };
    employees.push(employee);
    console.log(req.body.name)
    console.log(employees);
    res.send(employees);
});

const port = process.env.PORT || 8080;

app.listen(port);
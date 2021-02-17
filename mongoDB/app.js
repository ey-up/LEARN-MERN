
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ey:ey@cluster0.rr92h.mongodb.net/<dbname>?retryWrites=true&w=majority";



MongoClient.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true },function(err, db) {
    if(err) throw err;
    var dbo = db.db("mydb");

    // create database
    // dbo.createCollection("customers", function(err,res){
    //     if(err) throw err;
    //     console.log("collection created");
    //     db.close();
    // })

    // insert object
    // let obj = {name: "ey-up", address:"ist"};
    // dbo.collection("customers").insertOne(obj, function(err){
    //     if(err) throw err;
    //     console.log("document inserted");
    //     db.close();
    // })

    // multi insert
    // let obj2 = [
    //     { name: "ey-up", address: "ist" },
    //     { name: "ey", address: "ist" }
    // ];
    // dbo.collection("customers").insertMany(obj, function (err,res) {
    //   if (err) throw err;
    //   console.log("Number of documents inserted ->> ", res.insertedCount);
    //   db.close();
    // });
    
    // find all
    // dbo.collection("customers").find({}).toArray(function(err,res){
    //     if(err) throw err;
    //     console.log(res);
    // })

    // find one
    // dbo.collection("customers").findOne({},(function(err,res){
    //     if(err) throw err;
    //     console.log(res );
    // }))

    // query 
    // var query ={name:"ey-up"};
    // dbo.collection("customers").find(query).toArray(function (err,res) {
    //     if(err) throw err;
    //     console.log(res);
    //     db.close();
    // })

    // delete
    // dbo.collection("customers").deleteOne({name:"ey-up"},function(err,res){
    //     if (err) throw err;
    //     console.log(res);
    //     db.close();
    // })
})
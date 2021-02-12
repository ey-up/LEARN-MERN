const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type": "text/html"});
    let returnErr = "<h1>Oops! 404 Page Not Found</h1>"
    let q  = url.parse(req.url,true);
    let fn = "./" + q.pathname + ".html";
    fs.readFile(fn,function(err,data){
        if(err){
            return res.end(returnErr);
        }
        res.write(data);        
        return res.end();
        
    })
}).listen(8080);
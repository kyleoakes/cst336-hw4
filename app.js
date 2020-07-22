const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// routes
app.get("/", function(req, res){
   res.render("index.ejs"); 
});
app.get("/gates", function(req, res){
   res.render("gates.ejs"); 
});
app.get("/binary_adder", function(req, res){
   res.render("binary_adder.ejs"); 
});
app.get("/references", function(req, res){
   res.render("references.ejs"); 
});

// starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});
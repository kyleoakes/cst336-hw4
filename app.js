const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// var jQuery = require('jquery');
// var $ = jQuery;

var faker = require('faker');
var companyName, companyText;

function updateCompany() {
   companyName = faker.company.companyName();
   companyText = faker.company.bsBuzz() + " " + faker.company.bsAdjective() + " " + faker.company.bsNoun() + "!";
   app.locals.companyName = companyName;
   app.locals.companyText = companyText;
}

// routes
app.get("/", function(req, res){
   updateCompany();
   res.render("index.ejs");
});
app.get("/gates", function(req, res){
   updateCompany();
   res.render("gates.ejs"); 
});
app.get("/binary_adder", function(req, res){
   updateCompany();
   res.render("binary_adder.ejs"); 
});
app.get("/references", function(req, res){
   updateCompany();
   res.render("references.ejs"); 
});

// starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});

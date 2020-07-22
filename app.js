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
}

// routes
app.get("/", function(req, res){
   updateCompany();
   res.render("index.ejs", {"companyName":companyName, "companyText":companyText});
});
app.get("/gates", function(req, res){
   updateCompany();
   res.render("gates.ejs", {"companyName":companyName, "companyText":companyText}); 
});
app.get("/binary_adder", function(req, res){
   updateCompany();
   res.render("binary_adder.ejs", {"companyName":companyName, "companyText":companyText}); 
});
app.get("/references", function(req, res){
   updateCompany();
   res.render("references.ejs", {"companyName":companyName, "companyText":companyText}); 
});

// starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});

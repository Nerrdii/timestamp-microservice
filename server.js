var express = require('express');
var moment = require('moment');
var path = require('path');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
   res.send("It works!");
});

app.listen(port, function(){
    console.log("App listening on port " + port);
});
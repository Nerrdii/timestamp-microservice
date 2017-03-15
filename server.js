var express = require('express');
var moment = require('moment');
var path = require('path');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    var file = path.join(__dirname, "index.html");

    res.sendFile(file, function(err){
        if (err) {
            res.statusCode = err.status;
            console.log("Couldn't serve file: " + file);
        } else {
            console.log("Serving file: " + file);
        }
    })
});

app.get('/:date', function(req, res){
   var date = req.params.date;

   if (!isNaN(date)) {
       date = moment(date, "X");
   } else {
       date = moment(date, "MMMM D, YYYY");
   }

   if (date.isValid()) {
       res.json({
           "unix": date.format("X"),
           "natural": date.format("MMMM D, YYYY")
       });
   } else {
       res.json({
           "unix": null,
           "natural": null
       })
   }
});

app.listen(port, function(){
    console.log("App listening on port " + port);
});

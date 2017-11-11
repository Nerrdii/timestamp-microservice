const express = require('express');
const moment = require('moment');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get('/:date', (req, res) => {
   let date = req.params.date;

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
       });
   }
});

app.listen(port, () => console.log(`App now listening on port ${port}...`));

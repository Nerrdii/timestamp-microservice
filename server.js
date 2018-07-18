const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/api/timestamp', (req, res) => {
  const date = new Date();

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

app.get('/api/timestamp/:date_string', (req, res) => {
  const dateString = req.params['date_string'];
  const date = new Date(!isNaN(dateString) ? +dateString : dateString);

  const jsonResponse = !isValidDate(date)
    ? { error: 'Invalid Date' }
    : {
        unix: date.getTime(),
        utc: date.toUTCString()
      };

  res.json(jsonResponse);
});

function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App now listening on port ${PORT}...`));

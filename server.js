const express = require('express');
const path = require('path');
const bodyParser  = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/data', (req, res) => {

  // Return json
  res.json();

  // Do something with data
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Statpro listening on ${port}`);
var port = 8080;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('This is an index page.');
});

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Example app listening on port ', port);
});

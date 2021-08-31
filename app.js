var express = require('express');
var app = express();
var path = require('path');
var os = require('os');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {
    platform: "121213rqw4w Hello from IBM !!  ", //process.platform // 🎉 Hello from IBM !! 🎉
    bit : process.arch
  });
});

app.listen(8080);
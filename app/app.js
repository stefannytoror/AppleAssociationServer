var express = require ('express');
var app = express();

app.get('/', function (req, res){
  res.send({message: 'Home'});
});

app.get('/apple-app-site-association', function (req, res){
  res.download('apple-app-site-association');
});

app.get('/upgrade/', function (req, res){
  res.send({message: 'Upgrade'});
});

module.exports = app;

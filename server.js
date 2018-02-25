const express = require('express');

// set up express app
const app = express();

app.use('/assets',express.static('assets'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
  });

  app.get('/Labs', function(req, res){
    res.sendFile(__dirname + '/Labs.html');
  });
  app.get('/Labone', function(req, res){
    res.sendFile(__dirname + '/Labs/lab1/index.html');
  });
  app.get('/PersonList', function(req, res){
    res.sendFile(__dirname + '/Labs/lab1/PersonList.html');
  });

  app.get('/Labtwo', function(req, res){
    res.sendFile(__dirname + '/Labs/lab2/index.html');
  });
  app.get('/Labthree', function(req, res){
    res.sendFile(__dirname + '/Labs/lab3/index.html');
  });
  app.get('/Labfour', function(req, res){
    res.sendFile(__dirname + '/Labs/lab4/index.html');
  });
  app.get('/Labfive', function(req, res){
    res.sendFile(__dirname + '/Labs/lab5/lab5.html');
  });
  app.get('/Labsix', function(req, res){
    res.sendFile(__dirname + '/Labs/lab6/lab6.html');
  });
  app.get('/Labsix/index', function(req, res){
    res.sendFile(__dirname + '/Labs/lab6/index.html');
  });

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
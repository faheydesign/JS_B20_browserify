'use strict';
var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + '/app'));
// app.use(express.static(__dirname + '/dist')); production


var server = http.createServer(app);

var port = process.env.PORT || 5000;

server.listen(port, function(){
  console.log('Server has started on port ' + port);
});

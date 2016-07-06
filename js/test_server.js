var express = require('express');
var app = express();
var path = require('path');
var port = 8000;

var viewName = 'test.html';

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../view/' + viewName));
});

app.listen(port);

console.log('server start on ' + port);


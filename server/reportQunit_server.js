var express = require('express');
var app = express();
var path = require('path');
var port = 8001;

exports.run = function(viewName) {

    // viewed at http://localhost:8080
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/../view/' + viewName));
    });

    app.listen(port);

    console.log('report server start on ' + port);
}
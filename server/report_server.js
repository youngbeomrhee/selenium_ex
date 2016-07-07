var express = require('express');
var app = express();
var path = require('path');
var port = 8001;

exports.run = function() {
    var viewName = 'reporter.html';
    // var viewName = 'ex_002.html';
    // var viewName = 'reporter.html';

    // viewed at http://localhost:8080
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/../view/' + viewName));
    });

    app.listen(port);

    console.log('report server start on ' + port);
}
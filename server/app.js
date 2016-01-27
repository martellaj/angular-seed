var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();

// Configure to log all requests.
app.use(logger('dev'));

// Set the public folder to serve public assets.
app.use(express.static(path.join(__dirname, '/../client')));

// Set up our one route to the index.html file.
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname + '/../client/index.html'));
});

module.exports = app;

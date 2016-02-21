/* global __dirname */
var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('/modules', express.static(__dirname + '/node_modules'));

app.use('/src', express.static(__dirname + '/src'));
app.use('/systemjs', express.static(__dirname + '/node_modules/systemjs/dist/'));
app.use('/mithril', express.static(__dirname + '/node_modules/mithril/'));
app.use('/mithril-j2c', express.static(__dirname + '/node_modules/mithril-j2c/node_modules/j2c/dist/'));
app.use('/j2c', express.static(__dirname + '/node_modules/j2c/dist/'));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));

app.get('/', function(req, res){
    res.sendFile( __dirname + '/public/index.html' );
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

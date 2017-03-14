var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();
var routes = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '../client')));

app.use('/', routes);

app.set('port', process.env.PORT || 3000);
var port = app.get('port');

app.listen(port, function () {
    console.log('localhost:3000')
});

module.exports = app;
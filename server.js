
var express = require('./config/express');
var app = express();
app.listen(3100);
console.log('Server running at http://localhost:3100/');
module.exports = app;

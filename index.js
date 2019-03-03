var express = require('express');
var app = express();

app.use(express.static('static', {'index': ['frontpage.html']}));
var server = app.listen(3000, function () {
    console.log('listening on http://localhost:3000');
});
var express = require('express');
var app = express();

/**
 * Let's create the .tpl and .error on the res object
 */
app.use(function (req, res, next) {
    res.error = [];
    res.tpl = {};
    return next();
});

/**
 * Include all the routes
 */
require('./routes/mainpage')(app);
require('./routes/personlist')(app);
require('./routes/publist')(app);

//Use the static MW
app.use(express.static('public'));

app.set('view engine', 'ejs');

/**
 * Standard error handler
 */
app.use(function (err, req, res, next) {
    res.status(500).send('Houston, we have a problem!');

    //Flush out the stack to the console
    console.error(err.stack);
});

var server = app.listen(3000, function () {
    console.log('Hello :3000');
});
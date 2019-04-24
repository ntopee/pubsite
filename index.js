const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Use the static MW
app.use(express.static('public'));
//set view engine
app.set('view engine', 'ejs');

/**
 * Parse parameters in POST
 */
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Include all the routes
 */
require('./routes/mainpage')(app);
require('./routes/personlist')(app);
require('./routes/publist')(app);

/**
 * Standard error handler
 */
app.use(function (err, req, res, next) {
    res.status(500).send('Houston, we have a problem!');

    //Flush out the stack to the console
    console.error(err.stack);
});

//start server
const server = app.listen(3000, function () {
    console.log('listening on http://localhost:3000');
});
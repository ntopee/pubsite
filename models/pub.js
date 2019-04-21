var Schema = require("mongoose/lib/browser").Schema;
var db = require('../config/db');

var Pub = db.model('Pub', new Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    open : String
}));
module.exports = Pub;
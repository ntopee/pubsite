const Schema = require("mongoose/lib/browser").Schema;
const db = require('../config/db');

const Pub = db.model('Pub', new Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    open: String
}));
module.exports = Pub;
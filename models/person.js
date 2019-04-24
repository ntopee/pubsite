const Schema = require("mongoose/lib/browser").Schema;
const db = require('../config/db');

const Person = db.model('Person', new Schema({
    name: {
        type: String,
        required: true
    },
    fullname: String,
    favourite: String,
    _pubs: [{
        type: Schema.Types.ObjectId,
        ref: 'Pub'
    }]
}));
module.exports = Person;
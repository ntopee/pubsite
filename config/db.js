var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ST4AUV', { useNewUrlParser: true });

module.exports = mongoose;
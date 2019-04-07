var requireOption = require('../common').requireOption;

/**
 * Saves the changes to the database
 */
module.exports = function (objectrepository) {

    var pubModel = requireOption(objectrepository, 'pubModel');

    return function (req, res, next) {
        console.log('savePub');
        return next();
    };
};
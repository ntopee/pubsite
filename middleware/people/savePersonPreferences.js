var requireOption = require('../common').requireOption;

/**
 * Save changes to person preferences to the db
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        return next();
    };

};
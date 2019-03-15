var requireOption = require('../common').requireOption;

/**
 * SAve changes to the db
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        return next();
    };

};
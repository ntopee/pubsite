var requireOption = require('../common').requireOption;

/**
 * Check/validate attributes
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        console.log('checkpersonMW');
        return next();
    };

};
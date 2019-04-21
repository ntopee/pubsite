var requireOption = require('../common').requireOption;

/**
 * Update the prferences of the person
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        console.log('savepersonpreferences');
        return next();
    };

};
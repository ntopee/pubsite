var requireOption = require('../common').requireOption;

/**
 * Get the person for the personid param
 *  - if there is no such person, redirect to /people
 *  - if there is one, put it on res.tpl.person
 */
module.exports = function (objectrepository) {

    var personkModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        return next();
    };

};
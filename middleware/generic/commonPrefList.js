var requireOption = require('../common').requireOption;

/**
 * Get the preferred pubs for the persons in res.tpl.people
 * create a list of the common preferred Pubs
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        return next();
    };

};
var requireOption = require('../common').requireOption;

/**
 * update res.tpl.person if we have the data for it
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        return next();
    };

};
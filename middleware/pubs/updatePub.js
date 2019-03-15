var requireOption = require('../common').requireOption;

/**
 * Update res.tpl.person if we have the data for it
 */
module.exports = function (objectrepository) {

    var pubModel = requireOption(objectrepository, 'pubModel');

    return function (req, res, next) {
        return next();
    };

};
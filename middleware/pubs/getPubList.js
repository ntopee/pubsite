var requireOption = require('../common').requireOption;

/**
 * Get the pub list and put it on res.tpl.pubList
 */
module.exports = function (objectrepository) {

    var pubModel = requireOption(objectrepository, 'pubModel');

    return function (req, res, next) {
        return next();
    };
};